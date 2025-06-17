'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '../utils/auth';
import { getItens } from '../services/api';

export default function Dashboard() {
  const router = useRouter();
  const [itens, setItem] = useState<any[]>([]);

  useEffect(() => {
    if (!getToken()) {
      router.push('/login');
    } else {
      loadItens();
    }
  }, []);

  const loadItens = async () => {
    try {
      const dados = await getItens();
      setItem(dados);
    } catch {
      alert('Erro ao carregar itens');
    }
  };

  return (
    <div>
      
      <h2>Meus Itens</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.data}  
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client'
import { useState } from 'react';
import { registro } from '../services/api';
import { setToken } from '../utils/auth';
import { useRouter } from 'next/navigation';


export default function RegistroPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await registro(email, senha);
      setToken(token);
      router.push('/');
    } catch {
      alert('Não cadastrado');
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/>
        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        /><br/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
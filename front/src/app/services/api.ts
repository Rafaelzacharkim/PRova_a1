'use client'
import { getToken } from '../utils/auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5003';

export const login = async (email: string, senha: string) => {
  const res = await fetch(`${API_URL}/usuario/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Email: email, Senha: senha }),
  });

  if (!res.ok) throw new Error('Erro no login');

  return res.json();
};

export const registro = async (email: string, senha: string) => {
  const res = await fetch(`${API_URL}/usuario/cadastrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    const errorMessage = errorData?.message || 'Erro no cadastro';
    throw new Error(errorMessage);
  }

  const data = await res.json();
  return data;
};





export const getItens = async () => {
  const token = getToken();
  const res = await fetch(`${API_URL}/item/listar`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error('Erro ao buscar itens');

  return res.json();
};

export const cadastrarComentario = async (nome: string, local: string, data: string) => {
  const token = getToken();
  const res = await fetch(`${API_URL}/eventos/cadastrar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ Nome: nome, Local: local, Data: data }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    const errorMessage = errorData?.message || 'Erro no cadastro';
    throw new Error(errorMessage);
  }

  return res.json();
};




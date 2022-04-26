import React from "react";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router";
import '../../App.css'
export default function Login() {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('/sessions', { email });
    const { _id } = response.data.user;
    localStorage.setItem('user', _id)
    navigate('/dashboard');

    console.log("response", response);
    console.log("_id", _id);
  }



  return (
    <>
      <p>
        Ofereca <strong style={{ color: "red" }}>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input type="email" id="email" placeholder="seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)} />
        <button className="btn" type="submit">Entrar</button>

      </form>
    </>
  )
}

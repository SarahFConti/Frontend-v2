import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default function Dashboard() {
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      })
      setSpot(response.data)
    }
    loadSpots();
  }, []);

  return (
    <>

      <ul className="spot-list">
        {spot.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.image_url})` }}></header>
            <strong>{spot.nome}</strong>
            <span>{spot.situacao  ? `R$${spot.situacao}/dia` : 'DISPONÍVEL ADOÇÃO'}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">
          cadastrar novo pet

        </button>
      </Link>
    </>
  )
}

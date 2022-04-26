import React from "react";
import { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";
import api from "../../services/api";
import { useNavigate } from "react-router";
import './style.css';


export default function New() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null); // para criar a preview
  const [nome, setNome] = useState(''); //armazenar nome, set alterar valor, iniciar vazio
  const [descricao, setDescricao] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [porte, setPorte] = useState('');
  const [raca, setRaca] = useState('');
  const [situacao, setSituacao] = useState('');
  const [categorias, setCategorias] = useState('');

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null
  }, [image])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user')
    data.append('image', image);
    data.append('nome', nome);
    data.append('descricao', descricao);
    data.append('cidade', cidade);
    data.append('uf', uf);
    data.append('idade', idade);
    data.append('sexo', sexo);
    data.append('porte', porte);
    data.append('raca', raca);
    data.append('situacao', situacao);
    data.append('categorias', categorias);

    await api.post('spots', data, {
      headers: { user_id }
    })

    navigate('/dashboard');


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label id="image" style={{ backgroundImage: `url(${preview})` }}
          className={image ? 'has-image' : ''}
        >
          <input type="file" onChange={event => setImage(event.target.files[0])} />
          <img src={camera} alt="select img" />
        </label>

          {/* name */}
      <label htmlFor="nome">Nome *</label>
      <input id="nome" placeholder="Seu pet amado"
        value={nome}
        onChange={event => setNome(event.target.value)}
      />

      {/* descrição */}
      <label htmlFor="descricao">Descrição *</label>
      <input id="descricao" placeholder="Qual a personalidade do pet?"
        value={descricao}
        onChange={event => setDescricao(event.target.value)}
      />

      {/* cidade */}
      <label htmlFor="cidade">Cidade *</label>
      <input id="cidade" placeholder=" São Paulo"
        value={cidade}
        onChange={event => setCidade(event.target.value)}
      />

      {/* uf */}
      <label htmlFor="uf">Uf *</label>
      <input id="uf" placeholder="SP"
        value={uf}
        onChange={event => setUf(event.target.value)}
      />

      {/*idade */}
      <label htmlFor="idade">Idade </label>
      <input id="idade" placeholder="2 anos "
        value={idade}
        onChange={event => setIdade(event.target.value)}
      />

      {/* sexo */}
      <label htmlFor="sexo">Sexo *</label>
      <input id="sexo" placeholder="Macho ou Fêmea"
        value={sexo}
        onChange={event => setSexo(event.target.value)}
      />

      {/* porte */}
      <label htmlFor="porte">Porte *</label>
      <input id="porte" placeholder="Pequeno"
        value={porte}
        onChange={event => setPorte(event.target.value)}
      />

      {/* raca */}
      <label htmlFor="raca">Raça *</label>
      <input id="raca" placeholder="vira-lata"
        value={raca}
        onChange={event => setRaca(event.target.value)}
      />

      {/* situacao */}
      <label htmlFor="situacao">Situação do Pet * <span>(Em branco disponível para ADOÇÃO)</span></label>
      <input id="situacao" placeholder=" "
        value={situacao}
        onChange={event => setSituacao(event.target.value)}
      />

      {/* categorias */}
      <label htmlFor="categorias ">Categoria *</label>
      <input id="categorias " placeholder="Cachorro ou gato"
        value={categorias}
        onChange={event => setCategorias(event.target.value)}
      />


        <button type="onSubmit" className="bnt">Cadastrar</button>


      </form>

    </>
  )
}

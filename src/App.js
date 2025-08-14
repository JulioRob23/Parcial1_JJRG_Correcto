import logo from './LogoURL.png';
import { useState } from 'react';
import './App.css';

function App() {
  const Login = () => {
    console.log('Login ejecutado');
  };
  
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [codigo, setCodigo] = useState('');


  const habilitado = usuario.trim() !== '' && contraseña.trim() !== '';
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <form className='App-Form'>
          <input
            className='input1'
            type='text'
            placeholder='Codigo de Cliente'
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button type="button" onClick={Login} disabled={!habilitado}>
            Entrar
          </button>       
        </form>
      </header>
    </div>
  );
}

export default App;

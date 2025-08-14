import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('El boton debe de estar deshabilitado al iniciar', () => {
  render(<App />);
  const boton = screen.getByRole('button', { name: /Entrar/i });
  expect(boton).toBeDisabled();
});

test('El boton se habilita cuando ambos campos tienen texto', () => {
  render(<App />);

  const usuario = screen.getByPlaceholderText(/Usuario/i);
  const contrasenia = screen.getByPlaceholderText(/Contraseña/i);
  const codigo = screen.getByPlaceholderText(/Codigo de Cliente/i);
  const boton = screen.getByRole('button', { name: /Entrar/i });

  fireEvent.change(usuario, { target: { value: 'Jujar2307' } });
  fireEvent.change(contrasenia, { target: { value: 'Hola1234' } });
  fireEvent.change(codigo, { target: { value: '1234' } });



  expect(boton).toBeEnabled();
});

test('El boton manda a llamar a la funcion Login al hacer click', () =>{
  render(<App/>);

  const boton = screen.getByRole('button', { name: /Entrar/i });
  fireEvent.click(boton,)
})

test('El botón manda a llamar a la función Login al hacer click', () => {
  render(<App />);

  const usuario = screen.getByPlaceholderText(/Usuario/i);
  const contrasenia = screen.getByPlaceholderText(/Contraseña/i);
  const codigo = screen.getByPlaceholderText(/Codigo de Cliente/i);

  fireEvent.change(usuario, { target: { value: 'Jujar2307' } });
  fireEvent.change(contrasenia, { target: { value: 'Hola1234' } });
  fireEvent.change(codigo, { target: { value: '1234' } });
  
  const spy = jest.spyOn(console, 'log').mockImplementation(() => {});


  const boton = screen.getByRole('button', { name: /Entrar/i });
  
  fireEvent.click(boton);

  expect(spy).toHaveBeenCalledWith('Login ejecutado');

  spy.mockRestore();
});
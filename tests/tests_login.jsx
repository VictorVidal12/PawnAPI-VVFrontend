// tests/LoginForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../../src/pages/LoginForm'; // Ajusta el path según sea necesario

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
};

describe('LoginForm', () => {
  test('renders the login form elements', () => {
    renderComponent();

    // Verifica que el campo de email esté presente
    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    // Verifica que el campo de contraseña esté presente
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    expect(passwordInput).toBeInTheDocument();

    // Verifica que el botón "Ingresar" esté presente
    const submitButton = screen.getByRole('button', { name: /Ingresar/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('displays error message on invalid login', () => {
    renderComponent();

    // Encuentra los inputs y el botón
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    const submitButton = screen.getByRole('button', { name: /Ingresar/i });

    // Simula el ingreso de un email y contraseña incorrectos
    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    // Simula el clic en el botón de "Ingresar"
    fireEvent.click(submitButton);

    // Espera a que el mensaje de error aparezca (sin necesidad de asíncronía)
    const errorMessage = screen.queryByText(/Usuario o contraseña incorrectos/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

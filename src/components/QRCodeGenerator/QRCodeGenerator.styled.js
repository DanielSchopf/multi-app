import styled from 'styled-components';
// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas, e sombras.
export const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  padding: 40px; 
  background: #7C98B3;
  border-radius: 15px; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
  max-width: 400px; 
  margin: 50px auto; 
`;

// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
export const Title = styled.h2`
  color: #333; 
  margin-bottom: 20px;
  font-size: 24px; 
  text-align: center;
`;

// Cria um componente estilizado chamado Input usando styled-components.
// Esse componente estiliza um <input> com padding, borda, bordas arredondadas, e sombra interna.
export const Input = styled.input`
  margin-bottom: 20px; 
  padding: 12px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  width: 100%; 
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); 
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus { 
    border-color: #007bff; 
    outline: none;
  }
`;

// Cria um componente estilizado chamado QRCodeContainer usando styled-components.
// Esse componente estiliza uma <div> com padding, fundo, bordas arredondadas, e sombra.
export const QRCodeContainer = styled.div`
  margin-top: 20px; 
  padding: 20px; 
  background: #f9f9f9;
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

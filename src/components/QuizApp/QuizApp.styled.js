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
  max-width: 500px; 
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

// Cria um componente estilizado chamado Question usando styled-components.
// Esse componente estiliza um <p> para exibir a pergunta com cor, tamanho da fonte e margem.
export const Question = styled.p`
  color: black; 
  font-size: 20px; 
  margin-bottom: 20px;
  text-align: center; 
`;

// Cria um componente estilizado chamado OptionButton usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas, e efeitos de transição.
export const OptionButton = styled.button`
  padding: 12px 20px; 
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px;
  margin: 10px;
  transition: background-color 0.3s, transform 0.3s; 

  &:hover { 
    background-color: #0056b3; 
    transform: scale(1.05); 
  }

  &:active {
    background-color: #004494;
    transform: scale(0.95); 
  }
`;

// Cria um componente estilizado chamado Score usando styled-components.
// Esse componente estiliza um <p> para exibir a pontuação com cor, tamanho da fonte e margem.
export const Score = styled.p`
  color: #333; 
  font-size: 20px; 
  margin-top: 20px; 
  text-align: center; 
`;
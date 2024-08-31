import styled from 'styled-components';

// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas e sombras.
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

// Cria um componente estilizado chamado Button usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas e efeitos de transição.
export const Button = styled.button`
  padding: 12px 20px; 
  background-color: #007bff; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px; 
  transition: background-color 0.3s; 
  margin-bottom: 20px; 

  &:hover { 
    background-color: #0056b3; 
  }
`;

// Cria um componente estilizado chamado TaskList usando styled-components.
// Esse componente estiliza uma <ul> para listar as tarefas sem estilo de lista padrão.
export const TaskList = styled.ul`
  list-style-type: none; 
  padding: 0; 
  width: 100%; 
`;


// Cria um componente estilizado chamado TaskItem usando styled-components.
// Esse componente estiliza um <li> com fundo, bordas arredondadas, padding, margem, sombra e efeitos de transição.
export const TaskItem = styled.li`
  background: #f9f9f9; 
  border-radius: 5px; 
  padding: 10px; 
  margin-bottom: 10px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  font-size: 16px; 
  transition: background-color 0.3s; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 

  &:hover { 
    background-color: #f1f1f1; 
  }

  button { 
    margin-left: 10px; 
    background: transparent; 
    border: none; 
    color: red; 
    cursor: pointer; 
    font-size: 16px; 

    &:hover { 
      color: darkred; 
    }
  }
`;

// Cria um componente estilizado chamado EditInput usando styled-components.
// Esse componente estiliza um <input> para edição de tarefas com padding, borda, bordas arredondadas e sombra interna.
export const EditInput = styled.input`
  margin-left: 10px; 
  padding: 6px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  width: 60%; 
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); 
  font-size: 14px; 
  transition: border-color 0.3s; 

  &:focus { 
    border-color: #007bff; 
    outline: none; 
  }
`;
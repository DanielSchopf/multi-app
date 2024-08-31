// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from 'react';
import {
  getTasksFromLocalStorage,
  addTaskToLocalStorage,
  removeTaskFromLocalStorage,
  updateTaskInLocalStorage,
} from '../../services/localStorageService'; // Importa o arquivo de serviços
// Importa os estilos do TodoApp
import { Container, Title, Input, Button, TaskList, TaskItem, EditInput} from './TodoApp.styled';

// Define o componente funcional TodoApp.
const TodoApp = () => {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(''); // Estado para a nova tarefa a ser adicionada.
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(''); // Estado para o texto da tarefa que está sendo editada.

  // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
  useEffect(() => {
    fetchTasks();
  }, []);

  // Função que busca as tarefas da API e atualiza o estado com as tarefas recebidas.
  const fetchTasks = async () => {
    const storedTasks = getTasksFromLocalStorage(); // Obtem as tarefas salvas no localStorage
    setTasks(storedTasks); // Atualiza o estado com as tarefas recebidas.
  };

  // Função que adiciona uma nova tarefa.
  const addTask = async () => {
    if (task) { // Verifica se o campo da tarefa não está vazio.
      const newTask = { id: Date.now(), text: task }; // Cria um objeto de tarefa com o texto fornecido com um id único.
      addTaskToLocalStorage(newTask) // Adiciona uma tarefa ao localStorage.
      setTasks([...tasks, newTask]); // Atualiza o estado com a nova tarefa adicionada.
      setTask(''); // Limpa o campo de entrada.
    }
  };

  // Função que exclui uma tarefa.
  const deleteTask = async (id) => {
    removeTaskFromLocalStorage(id); // Define o id da tarefa que será deletada.
    setTasks(tasks.filter(task => task.id !== id)) // Atualiza o estado removendo a tarefa excluída.
  };

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = async (id) => {
    updateTaskInLocalStorage(id, editingTaskText); // Atualiza a tarefa no localStorage.
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingTaskText } : task))); // Atualiza o estado com a tarefa modificada.
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(''); // Limpa o texto da tarefa em edição.
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
      <Input
        type="text" // Define o tipo de entrada como texto.
        value={task} // Define o valor do campo de entrada com o estado 'task'.
        onChange={(e) => setTask(e.target.value)} // Atualiza o estado 'task' com o valor digitado pelo usuário.
        placeholder="Add a new task" // Exibe um placeholder no campo de entrada.
      />
      <Button onClick={addTask}>Add Task</Button>  {/* Botão para adicionar uma nova tarefa */}
      {/* Lista de tarefas */}
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)} // Atualiza o estado 'editingTaskText' com o valor digitado pelo usuário.
                onBlur={() => updateTask(task.id)} // Atualiza a tarefa quando o campo perde o foco.
              />
            ) : (
              <>
                {task.text} {/* Exibe o texto da tarefa */}
                <div>
                  {/* Botão para entrar no modo de edição da tarefa */}
                  <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                  {/* Botão para excluir a tarefa */}
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;

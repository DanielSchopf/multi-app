// Função para obter tarefas do LocalStorage
export const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };
  
  // Função para salvar tarefas no LocalStorage
  export const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Função para adicionar uma tarefa
  export const addTaskToLocalStorage = (task) => {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    saveTasksToLocalStorage(tasks);
  };
  
  // Função para remover uma tarefa
  export const removeTaskFromLocalStorage = (id) => {
    const tasks = getTasksFromLocalStorage().filter((task) => task.id !== id);
    saveTasksToLocalStorage(tasks);
  };
  
  // Função para atualizar uma tarefa
  export const updateTaskInLocalStorage = (id, updatedText) => {
    const tasks = getTasksFromLocalStorage().map((task) =>
      task.id === id ? { ...task, text: updatedText } : task
    );
    saveTasksToLocalStorage(tasks);
  };
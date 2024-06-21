import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: number;
}

const todos: Todo[] = [];

const todoContainer = document.querySelector(
  ".todo-container"
) as HTMLDivElement;
const todoInput = document.getElementsByTagName("input")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault(); // Corrected to call the function

  const newTodo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: Math.random() * 100,
  };
  todos.push(newTodo);
  todoInput.value = "";
  renderTodo();
};
const renderTodo = () => {};

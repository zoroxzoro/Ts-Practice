import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
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
    id: String(Math.random() * 100),
  };
  todos.push(newTodo);
  todoInput.value = "";
  renderTodo(todos);
};

const generateTodos = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkBox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;

  // creating p

  const paragraph: HTMLParagraphElement = document.createElement("p");
  checkBox.setAttribute("type", "checkBox");
  checkBox.className = "isCompleted";
  paragraph.innerText = title;

  // creating delete button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "X";
  btn.className = "deleteBtn";
  todo.append(checkBox, paragraph, btn);
  todoContainer.append(todo);
  btn.onclick = () => {
    deleteTodo(id);
  };
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((items) => items.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};
const renderTodo = (todos: Todo[]) => {
  todoContainer.innerText = "";
  todos.forEach((items) => {
    generateTodos(items.title, items.isCompleted, items.id);
  });
};

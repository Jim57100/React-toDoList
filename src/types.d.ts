type TodoList = {
  id: number,
  title :string,
};


type NewListForm = (onCreate: Function) => void;

type AddTodo = (
  id: number, 
  text: string, 
  description:string, 
  assigned:string, 
  priority:string, 
  complete:boolean
) => void;

type Todo = {
  id: number,
  text: string,
  description: string,
  assigned: string,
  priority: string,
  complete: boolean,
}

type ToggleComplete = (selectedTodo: Todo) => void;
type EditTodo = (id :number) => void;
type DeleteTodo = (id :number) => void;

type ListPropsType = {
  id :number,
  title: string,
  delete: Function,
};
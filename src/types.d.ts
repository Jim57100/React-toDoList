
/**
 * Component Types
 */
type ContainerType = {
  children: Component
}

type NewListFormType = {
  listTitle: string,
  filterText :string,
  onCreate :Function,
  onhandleFilterTextChange :Function
}

type ListType = {
  key    :number,
  id     :number,
  title  :string,
}

type Task = {
  id          :number,
  text        :string,
  description :string,
  assignedTo  :string,
  priority    :string,
  completed   :boolean,
}

/**
 * Props Types
 */

type ListPropsType = {
  id      :number,
  title   :string,
  delete  :(id :number) => void
}

type TaskPropsType = {
  task            :Task,
  toggleComplete  :(id :number) => void
  delete          :(id :number) => void
  update          :(id :number, text :string, description :string, assignedTo :string, priority :string) => void
}

type confirmUpdate = (id :number, titleUpdated :string, descriptionUpdated :string, assignedToUpdated :string, priorityUpdated :string) => void;

type handleConfirmUpdate = (e: MouseEvent) => void;

type ButtonTypeProps = {
  type     :submit,
  color    :string,
  children :string,
  clic     :React.MouseEventHandler<HTMLButtonElement>
}

type NonControlledInputProps = {
  name     :string,
  children :string,
  
}

type ControlledInputProps = {
  name     :string, 
  value    :string, 
  change   :Function, 
  children :string,
  onChange :ChangeEventHandler
}



/**
 * Functions Types
 */

type AddTask = (text: string, description :string, assignedTo :string, priority :string) => void;

type HandeDeleteTask  = (e :MouseEvent) => void;

type HandeDeleteList  = (e :MouseEvent) => void;

type ToggleComplete   = (id :number) => void;

// type AddList     = (newList :List) => void;
// type CreateTask  = (newTask :string) => void;
// type DeleteTask  = (selectedTask :Task) => void;
// type UpdateTask  = (selectedTask :Task) => void;
export type User = {
  id: string;
  name: string;
};

export type List = {
  id: string;
  name: string;
};

export type Task = {
  id: string;
  name: string;
  status: "todo" | "done";
  listId: string;
};

const user: User = {
  id: "1",
  name: "John Doe",
};

const lists: List[] = [
  {
    id: "school",
    name: "School",
  },
  {
    id: "work",
    name: "Work",
  },
  {
    id: "gym",
    name: "Gym",
  },
  {
    id: "family",
    name: "Family",
  },
];

const tasks: Task[] = [
  {
    id: "1",
    name: "Do homework",
    status: "todo",
    listId: "school",
  },
  {
    id: "2",
    name: "Study for exam",
    status: "done",
    listId: "school",
  },
  {
    id: "3",
    name: "Submit request for salary increase",
    status: "todo",
    listId: "work",
  },
  {
    id: "4",
    name: "Get tax forms",
    status: "todo",
    listId: "school",
  },
];

const defaultData = {
  user,
  tasks,
  lists,
};

export const getUserName = () => {
  return user.name;
};

export const getLists = async () => {
  // await db.read();
  // return db.data.lists;
  return [];
};

export const getTasksFromList = (listId: string) => {
  console.log(tasks.filter((task) => task.listId === listId));
  return tasks.filter((task) => task.listId === listId);
};

export const updateTodoItem = (taskId: string, newStatus: "done" | "todo") => {
  const taskIdx = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIdx].status = newStatus;
  console.log(tasks);
};

export const changeUserName = (user: User, newName: Partial<User>): User => {
  return { ...user, ...newName };
};

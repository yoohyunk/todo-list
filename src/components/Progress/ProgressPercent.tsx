import { Task, getTasksFromList } from "@/lib/db";

export const calculatePercentTodo = ({ tasks }: percentTodoProps) => {
  const isDoneTodo = tasks.filter((task) => task.status === "done");

  const percent = ((isDoneTodo.length / tasks.length) * 100).toFixed(2);

  return percent;
};

type percentTodoProps = { tasks: Task[] };

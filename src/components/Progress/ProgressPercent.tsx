import { Task, getTasksFromList } from "@/lib/db";

export const calculatePercentTodo = ({ tasks }: percentTodoProps) => {
  if (tasks.length === 0) {
    return 0;
  }
  const isDoneTodo = tasks.filter((task) => task.status === "done");

  const percent = (isDoneTodo.length / tasks.length) * 100;

  return percent;
};

type percentTodoProps = { tasks: Task[] };

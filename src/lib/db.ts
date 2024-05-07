export type List = {
    id: string,
    name: string
}

export type Task = {
    id: string,
    name: string,
    status: "todo" | "done",
    listId: string
}

const lists: List[] = [
    {
        id: "school",
        name: "School"
    },
    {
        id: "work",
        name: "Work"
    },
    {
        id: "gym",
        name: "Gym"
    }
]

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
        status: "todo",
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
]


export const getLists = () => {
    return lists   
}

export const getTasksFromList = (listId: string) => {
    return tasks.filter(task => task.listId === listId)
}
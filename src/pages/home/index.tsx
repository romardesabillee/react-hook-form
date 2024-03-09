import { useState } from "react"


interface ITodo {
    id: number,
    name: string,
    description: string
}

export default function Home() {

    const [todoList, setTodoList] = useState<ITodo[]>([
        { id: 1, name: 'todo 1', description: 'description' },
        { id: 2, name: 'todo 1', description: 'description' },
        { id: 2, name: 'todo 1', description: 'description' },
    ]);
    const [state, setState] = useState<string>();

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    return (
        <div>Home</div>
    )
}
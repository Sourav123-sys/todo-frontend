import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://todo-f16t.onrender.com/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return [tasks, setTasks];
};

export default useTasks;
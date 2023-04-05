import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])
    return [tasks, setTasks];
};

export default useTasks;
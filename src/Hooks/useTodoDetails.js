import React, { useEffect, useState } from 'react';

const useTodoDetails = (id) => {
    const [todoDetails, setTodoDetails] = useState([]);  
    useEffect(() => {
           const url = `https://todo-f16t.onrender.com/tasks/${id}`
          
            fetch(url)
            .then(response => response.json())
        .then(data=>setTodoDetails(data))
    },[todoDetails])
    return {todoDetails, setTodoDetails}
};

export default useTodoDetails;
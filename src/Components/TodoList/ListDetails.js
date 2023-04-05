import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useTodoDetails from '../../Hooks/useTodoDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { toast } from 'react-hot-toast';
import useTasks from '../../Hooks/useTasks';

const ListDetails = () => {
    const { id } = useParams();
    const { todoDetails, setTodoDetails } = useTodoDetails(id)
    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useTasks();
    const navigate = useNavigate()
    const handleDelete = () => {
        console.log("delete")
        if (user) {
            const confirmMsg = window.confirm("Are you sure?")

            if (confirmMsg) {
                
                
                fetch(`https://todo-f16t.onrender.com/task/${id}`, {
                    method: 'DELETE',
    
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = tasks.filter(item => item._id !== id);
                            setTasks(remaining);
                        }
                    })
                navigate('/')
                toast.success(' Todo deleted successfully')
                
            }
            else {
                toast.error('ok,No problem')
            }
      
      
        }
        else {
            toast.error("Login first for deleting  todo ")
     }
        
     }
    return (
        <div>
  

        <div className='flex flex-col justify-around items-center py-5 coin-card rounded-lg'>
       
        <div className='text-center'>
                    <h1 className='text-3xl sp-style font-bold text-gray-600'>Task : { todoDetails.name}</h1>
                  
                    <p className=' font-bold text-gray-600 text-xl'>Description : { todoDetails.details}</p>
                    <h3 className='  font-bold text-blue-600'>Date : { todoDetails.date}</h3>
           
        
           
        </div>
       
                <div className='flex  justify-between '>
                    
                    <button className='mx-auto mr-5 mt-5 text-white bg-[#05489f] border-2 border-transparent  font-medium hover:font-medium px-10 py-2 cursor-pointer rounded-md'>
                    <Link to={`/update/${todoDetails._id}`}> Update</Link>
                    </button>

        <button className='mx-auto mt-5 text-white bg-[#f00606] border-2 border-transparent  font-medium hover:font-medium px-10 py-2 cursor-pointer rounded-md' onClick={()=>handleDelete(todoDetails._id)}>Delete</button>
           
   
         </div>
    </div>



        
        
    </div>
           
    
       
    );
};

export default ListDetails;
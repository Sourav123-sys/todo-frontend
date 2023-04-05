import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaPlusOctagon} from '@fortawesome/free-solid-svg-icons';
import { BsPlusSquare } from 'react-icons/bs';
import TodoList from '../TodoList/TodoList';
import useTasks from '../../Hooks/useTasks';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
const Home = () => {
    const [user] = useAuthState(auth);
    console.log(user,"user from home")
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const details = data.details;
        const date = data.date;
        const email = user.email
        const tasks = { name, details,date,email }
        if (user) {
            fetch('http://localhost:4000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast.success('Item added successfully')
            })
        reset()
        } else {
            toast.error("Login first for add a todo list")
     }
    }
    const [tasks] = useTasks();
    return (
        <>
                 <div className='flex mt-10 justify-center items-center'>
        <div className="card  bg-base-100 shadow-xl ">
            <div className="card-body ml-3">
                <h2 className="text-center text-2xl text-pink-700 font-bold mb-10">Create your Todo</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-xl">Task Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Task Name"
                            className=" mb-3 input input-bordered input-secondary w-full max-w-xs text-xl"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Task Name is Required'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Must be 3 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl mt-3">Task Description</span>
                        </label>
                                <textarea
                                    row={5} col={20}
                            type="text"
                            placeholder="Task Description"
                            className=" text-xl mb-3 input input-bordered input-secondary w-full max-w-xs"
                            {...register("details", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                            {errors.details?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl ">Date</span>
                        </label>
                        <input
                            type="date"
                            
                            className=" text-xl mb-3 input input-bordered input-secondary w-full max-w-xs"
                            {...register("date", {
                                required: {
                                    value: true,
                                    message: 'date is Required'
                                },
                               
                            })}
                        />
                        <label className="label">
                            {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                            {errors.details?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                        </label>
                    </div>

                   
                    <input className='btn w-full max-w-xs btn-secondary text-green-800 font-bold border-green-500 mb-5 text-lg mt-5 text-center' type="submit" value="ADD" />
                </form>
            </div>
        </div>
            </div >
            {
                    tasks.length > 0 &&
                    <TodoList></TodoList>
            }
           
        </>
   
    );
};

export default Home;
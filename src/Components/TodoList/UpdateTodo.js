import React from 'react';
import { useParams } from 'react-router-dom';
import useTodoDetails from '../../Hooks/useTodoDetails';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const UpdateTodo = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const { register, handleSubmit, watch, formState: { errors }, trigger, reset } = useForm();
    const { todoDetails, setTodoDetails } = useTodoDetails(id)
    const handleAddProduct = async (data, e) => {
        
        const name = data.name;
        const details = data.details;
        const date = data.date;
        
        const updatedTask = { name, details, date }
        console.log(updatedTask)
        if (user) {
            fetch(`http://localhost:4000/update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask )
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast.success('Todo updated successfully')
            })
        reset()
        } else {
            toast.error("Login first for updating todo ")
     }
      
    }
    return (
        <>
        <h1 className='mt-10 text-3xl text-center text-cyan-700 sp-style'>Update Your Todo</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 m-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                
                <div className="card-body m-10 text-2xl">
                    <h2 className="card-title">Task: <span className="text-cyan-700">{todoDetails.name}</span></h2>
                    <p>{todoDetails.details}</p>
                    <p>Date: {todoDetails.date}</p>
                    

                </div>
            </div>

            <form className='m-5' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Task</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Todo Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        row={5} col={20}
                        type="text"
                        placeholder="details"
                        className="input input-bordered w-full max-w-xs"
                        {...register("details", {
                            required: {
                                value: true,
                                message: 'details is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="availableQuantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("date", {
                            required: {
                                value: true,
                                message: 'date is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
               
               


                <input className='btn w-40 max-w-xs text-white bg-cyan-700 px-1 py-1' type="submit" value="Update" />
            </form>
        </div>
    </>

    );
};

export default UpdateTodo;
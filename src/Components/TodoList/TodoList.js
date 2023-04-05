import React from 'react';
import useTasks from '../../Hooks/useTasks';
import ListCard from './ListCard';

const TodoList = () => {
    const [tasks] = useTasks();
    console.log(tasks,"tasks")
    return (
        <div className="mt-10">
            <h1 className="text-center text-green-700 text-2xl ">Todo List</h1>
            <div className="overflow-x-auto ">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Name</th>
                         
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks?.map((o, index) => <ListCard
                                key={o._id}
                                o={o}
                                index={index}
                               
                            ></ListCard>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TodoList;
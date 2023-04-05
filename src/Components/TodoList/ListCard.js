import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = ({ o, index }) => {
    const {_id,name,date,details}=o
    return (
        <tr className='text-center text-xl'>
        <th>{index + 1}</th>
        
       
        <td><span className="font-bold ">{name}</span></td>
       
            <td>
            <button className="text-white bg-green-700   font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">
                
             <Link to={`/tasks/${_id}`}> View</Link>
               
               
              
              </button>
            </td>
      
        
        
 
       
       
    </tr>
    );
};

export default ListCard;

import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import ListDetails from './Components/TodoList/ListDetails';
import UpdateTodo from './Components/TodoList/UpdateTodo';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/tasks/:id' element={
         <ListDetails></ListDetails>
        }></Route>
        <Route path='/update/:id' element={
         <UpdateTodo></UpdateTodo>
        }></Route>
      </Routes>
      <Toaster
        position="top-center" />
      <ToastContainer/>
    </div> 
  );
}

export default App;

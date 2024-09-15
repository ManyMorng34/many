
import { useState } from 'react'
import './App.css'
import { TableComponent } from './components/table/TableComponent'
import { InputComponent } from './components/Input/InputComponent';
// import { ButtonComponent } from './components/button/buttonComponent';

function App() {
const[user,Setuser]=useState([
  {id:1,Email:"many@gmail.com",username:"many",age:22},
  {id:2,Email:"many@gmail.com",username:"many",age:22},
  {id:3,Email:"many@gmail.com",username:"many",age:22},
  {id:4,Email:"many@gmail.com",username:"many",age:22},
]);
  return (
    <>
     <h1 className='text-cyan-400 font-bold text-center'>please fill your information</h1>
     <TableComponent/>
     {/* <ButtonComponent Onclick=""/> */}
     <p className='text-center mt-6 mb-7'>User Information</p>
      <InputComponent userInfo={user} />
    </>
  )
}

export default App

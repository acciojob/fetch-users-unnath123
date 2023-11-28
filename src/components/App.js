
import React, { useState } from "react";
import 'regenerator-runtime/runtime'
import 'core-js/stable'
import axios from 'axios'
import './../styles/App.css';

// let api = 'https://reqres.in/api/users'

const App = () => {

  const [ users, setUsers] = useState([])

 async function handlesubmit(){
    let response = await axios.get('https://reqres.in/api/users')
    setUsers(response.data.data)
    console.log(response.data.data)
    // let reponse = fetch('https://reqres.in/api/users')
    // .then((data1)=>data1.json())
    // .then((data2)=>console.log(data2))
    // .catch((e)=>console.log(e));
  }

  return (
    <div className="container">
      <div>
        <button onClick={handlesubmit}>Get User List</button>
      </div>
      <table>   
        <thead>
        <tr>
            <th>id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead> 
        <tbody>
          {
            users.length>0 ? 
           users.map((user)=>(
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td><img src={user.avatar}/></td>
            </tr>
           )) : <div><p>No Data found</p></div>
          }
        </tbody>  
      </table>
    </div>
  )
  }

export default App

import React, { useState ,useEffect} from 'react'
import { fetchUserData } from '../data/api'
import UserList from './UserList'

const User = () => {
// create state for userData  
const [user,setUser]= useState({})

// destructuring this data
const {users} = user
 

 // use useEffect for fetching data onece
 useEffect(()=>{
  const datalist = async () =>{
    try {
      const data = await fetchUserData();
      setUser(data);
    } catch (error) {
      console.log("faild to load users",error)
    }
  }
  datalist();
},[])

  return (
    <div className='container bg-white '>
     <div>
     <p className="text-primary fs-1 fw-bold text-center">Paginated User List</p>
     <UserList data={users}/> 
     </div>
    </div>
  )
}

export default User

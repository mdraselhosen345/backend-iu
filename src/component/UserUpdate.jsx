import React from 'react'
import { useLoaderData } from 'react-router'

const UserUpdate = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
    }
  return (
    <div>
      <h2>Edit a User</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" defaultValue={user.name}/>
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Update user"/>
      </form>
    </div>
  )
}

export default UserUpdate

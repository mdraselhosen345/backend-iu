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

        const updateUser = {name, email}



        // send data to the server
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                headers: {
                    'content-type': 'appliction/json'
                },
                body: JSON.stringify(updateUser)
            }

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('user info updated') ;
            }
        })
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

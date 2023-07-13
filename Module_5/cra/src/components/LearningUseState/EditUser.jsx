import React, { useState } from "react";

function EditUser() {
    const [user, setUser] = useState({
        email: null,
        password: null,
        mobile: null
    })
    const [updateUser, setUpdateUser] = useState({})
    const handleGetProfile = () => {
        // call API => object (user)
        fetch('https://fakestoreapi.com/users/1', {
            method: "GET"
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            setUpdateUser(data);
            setUser({
                email: data.email,
                password: data.password,
                mobile: data.phone
            })
        }).catch(function (error) {
            console.log(error);
        })

    }

    const handleInputValue = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSaveProfile = () => {
        // call api => save
        // fetch('https://fakestoreapi.com/users/1', {
        //     method: "PATCH",
        //     body: JSON.stringify({
        //         ...updateUser,
        //         email: user.email,
        //         phone: user.mobile,
        //         password: user.password
        //     })
        // })
        // .then(res => {
        //     return res.json()
        // })
        // .then(data => console.log(data))
        console.log(user);
    }
    return (
        <div>
            <h1 className="text-danger">Modify User</h1>
            <form className="w-25">
                <div className="form-group mb-2">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={user.email} onInput={handleInputValue} />
                </div>
                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onInput={handleInputValue} />
                </div>
                <div className="form-group mb-2">
                    <label>Moblle</label>
                    <input type="tel" className="form-control" name="mobile" value={user.mobile} onInput={handleInputValue} />
                </div>
                <div className="form-group mb-2">
                    <button type="button" className="btn btn-success btn-sm me-2" onClick={handleGetProfile}>Get Profile</button>
                    <button type="button" className="btn btn-dark btn-sm" onClick={handleSaveProfile}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser;
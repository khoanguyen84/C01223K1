import React, { useState } from "react";


function Login() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [state, setState] = useState({
        email: '',
        password: '',
        mobile: ''
    })
    const handleLogin = () => {
        console.log(state);
    }

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    // console.log({
    //     "email": email,
    //     "password": password
    // });
    return (
        <div>
            <h1>Login</h1>
            <form className="w-25">
                <div className="form-group mb-2">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" onInput={handleInputValue} />
                </div>
                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onInput={handleInputValue}/>
                </div>
                <div className="form-group mb-2">
                    <label>Moblle</label>
                    <input type="tel" className="form-control" name="mobile" onInput={handleInputValue}/>
                </div>
                <div className="form-group mb-2">
                    <button type="button" className="btn btn-dark" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}
// function Login() {
//     const handleLogin = () => {
//         console.log({
//             "email": document.getElementById('email').value,
//             "password": document.getElementById('pw').value
//         });
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <form className="w-25">
//                 <div className="form-group mb-2">
//                     <label>Email</label>
//                     <input type="email" className="form-control" id="email" />
//                 </div>
//                 <div className="form-group mb-2">
//                     <label>Password</label>
//                     <input type="password" className="form-control" id="pw" />
//                 </div>
//                 <div className="form-group mb-2">
//                     <button type="button" className="btn btn-dark" onClick={handleLogin}>Login</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

export default Login;
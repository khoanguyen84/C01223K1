import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// có 2 cách để tạo Component
// trong 1 component 
// 1. HTML
// 2. CSS
// 3. JS
// cách 1: Function Component
// cách 2: Class Component

// Naming Convention Component => PascalCase
// hooks 

// mã JS


// class App extends React.Component {
//     render() {
//         return (
//             <h1>Hello World</h1>
//         )
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
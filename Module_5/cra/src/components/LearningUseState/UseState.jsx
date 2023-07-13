import React, { useState } from "react";

// const [state, setState] = useState(initState) 
// state = initState (trong lần thực thi đầu tiên và có cùng kiểu dữ liệu)
//  -> initState: null, number, string, boolean, array, object, callback

// setState: là hàm => nhiệm vụ của hàm này là thay đổi trạng thái của State
//  -> hàm này phải trả về KDL của state
//  -> có 2 trường sử dụng
//      -> TH1: cập nhật trực tiếp ví dụ setState(value)
//      -> TH2: cập nhật qua callback function ví dụ setState((prev) => { ... return prev })


// Lưu ý:
// 1. Mỗi khi gọi hàm setState() => component sẽ được re-render
// 2. Nếu gọi nhiếu setSate() trong cùng 1 hàm (chức năng) thì component chỉ re-render 1 lần


// function UseState(){
//     const setCount = () => {
//         document.getElementById('count').innerText = Number(document.getElementById('count').innerText) + 1;
//         document.getElementById('p_1').innerText = Number(document.getElementById('p_1').innerText) + 1;
//     }
//     console.log('render');
//     return (
//         <div>
//             <h1 id="count">0</h1>
//             <p id="p_1">0</p>
//             <button onClick={setCount}>Increament</button>
//         </div>
//     )
// }
function UseState(){
    // Logic
    const [count, setCount] = useState(1000)
    // UI
    const handleIncrement = () => {
        // setCount(count + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }
    console.log('render');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increament</button>
        </div>
    )
}

export default UseState;
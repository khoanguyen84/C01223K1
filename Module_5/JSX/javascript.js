// let h1 = document.createElement('h1');
// h1.innerText = "Learing ReactJS";

// // h1.style.color = "white";
// // h1.style.backgroundColor = "green";

// // Object.assign(h1.style, {
// //     color: "yellow",
// //     backgroundColor: "red"
// // })

// h1.className = 'heading_1';

// let inpPw = document.createElement('input');
// inpPw.type = "password";
// inpPw.id = "pw";

// let container = document.createElement("div");
// container.appendChild(h1);
// container.appendChild(inpPw);

// document.getElementById('root').appendChild(container);

const form = document.createElement('form');

let div_1 = document.createElement("div");
div_1.className = 'form-group';
let label_1 = document.createElement('label');
label_1.innerText = "Email";
let input_1 = document.createElement('input');
input_1.type = 'text';
input_1.id = 'email'
div_1.appendChild(label_1);
div_1.appendChild(input_1);

let div_2 = document.createElement("div");
div_2.className = 'form-group';
let label_2 = document.createElement('label');
label_2.innerText = "Password";
let input_2 = document.createElement('input');
input_2.type = 'password';
input_2.id = 'password'
div_2.appendChild(label_2);
div_2.appendChild(input_2);


let div_3 = document.createElement("div");
div_3.className = 'form-group';
let btn_1 = document.createElement('button');
btn_1.innerText = 'Login';

btn_1.onclick = function () {
    alert(JSON.stringify({
        "email": input_1.value,
        "password": input_2.value
    }))
}

div_3.appendChild(btn_1)


form.appendChild(div_1)
form.appendChild(div_2);
form.appendChild(div_3);

document.getElementById('root').append(form)
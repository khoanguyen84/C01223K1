const h1 = React.createElement("h1", {
    className: 'heading_1',
    id: "h_1"
}, "ReactJS")


// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(h1);
var email = ''
var pw = ''

const form = React.createElement('form', null,
    React.createElement("div", {
        className: "form-group"
    }, React.createElement('label', null, 'Email')
        , React.createElement('input', {
            type: 'email',
            id: 'email',
            onInput: (e) => { email = e.target.value }
        })),
    React.createElement("div", {
        className: "form-group"
    }, React.createElement('label', null, 'Password')
        , React.createElement('input', {
            type: 'password',
            id: 'pw',
            onInput: (e) => { pw = e.target.value }
        })),
    React.createElement("div", {
        className: "form-group"
    }, React.createElement('button', {
        onClick: () => alert(JSON.stringify({
            'email': email,
            'password' : pw
        }))
    }, 'Login')))


const container = React.createElement(React.Fragment, null, h1, form)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(container);

var email = ''
var password = ''

const handleLogin = () => {
    alert(JSON.stringify({
        email : email,
        password: password
    }))
}
const form = (
    <form>
        <div className="form-group">
            <label>Email</label>
            <input type="email" onInput={(e) => email = e.target.value} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" onInput={(e) => password = e.target.value} />
        </div>
        <div className="form-group">
            <button onClick={handleLogin}>Login</button>
        </div>
    </form>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(form)
import React, {useState} from 'react'
import './login.css'; 

const Login = () => {

const [user, setUser] = useState({
    email:"",
    password:""
});

function HandleChage(event) {
    setUser({
            ...user,
            [event.target.name]:event.target.value        
    })
}


function HandleSubmit(event) {
    event.preventDefault()
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch('https://ecomerce-master.herokuapp.com/api/v1/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        
};

    return (

        <form onSubmit={(event)=>HandleSubmit(event)}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input name="email" type="email" onChange={(event)=>HandleChage(event)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input name="password" type="password" onChange={(event)=>HandleChage(event)} className="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className ="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary"  >Submit</button>
        </form>
    )
}

export default Login



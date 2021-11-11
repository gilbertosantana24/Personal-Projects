import React, {useState} from 'react'
import { useUserContext } from '../Context/userContext';
import {useHistory} from 'react-router';

const Signup = () => {

    const [user, setUser] = useState({
        first_name:"",
        last_name:"",
        birth_date:"",
        gender:"",
        email:"",
        password:""
    });


    var history = useHistory();

    const signUping = useUserContext();

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
        fetch('https://ecomerce-master.herokuapp.com/api/v1/signup', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .then(history.push("/login"));
            
    };




    return (
        <>
        {
            !signUping ? <> 
            <form onSubmit={(event)=>HandleSubmit(event)}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text"
                                
                                onChange={(event)=>HandleChage(event)}
                                className="form-control"
                                name="first_name"
                                id="first_name"
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" 
                               
                                onChange={(event)=>HandleChage(event)}
                                className="form-control" 
                                name="last_name" 
                                id="last_name" 
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                                <input name="email" type="email" 
                                   
                                    onChange={(event)=>HandleChage(event)}
                                    className="form-control" 
                                    name="email" 
                                    id="email" 
                                />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input name="password" type="password"
                                
                                onChange={(event)=>HandleChage(event)}
                                className="form-control"
                                name="password"
                                id="password" 
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Confirm password</label>
                            <input type="password" 
                                className="form-control" 
                                name="password_confirm" 
                                id="password_confirm" 
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">BirthDay</label>
                            <input type="date" 
                                className="form-control" 
                                onChange={(event)=>HandleChage(event)}
                                name="birth_date" 
                                id="birth_date" 
                            />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Gender</label>
                            <input type="text" 
                                className="form-control" 
                                onChange={(event)=>HandleChage(event)}
                                name="gender" 
                                id="gender" 
                            />
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
            </> : <>
                <h3>You Are Logged In</h3>

            </>
        }
        
    
    </>
    
    )
}

export default Signup

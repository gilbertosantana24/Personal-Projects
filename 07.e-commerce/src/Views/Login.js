import React, { useState } from 'react'
import './login.css';
import { login, getUserMe } from '../constants';
import { useUpdateUserContext, useUserContext } from '../Context/userContext';
import { useHistory } from 'react-router'; 
import { Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        active: false,
        message: "",
    })

    var loggedInUser = useUserContext();
    console.log(loggedInUser);

    const updateUser = useUpdateUserContext();
    const history = useHistory();

    const notify = (name) =>
        toast(`Welcome ${name}!`, {
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
        });

    function HandleChage(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function HandleSubmit(event) {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        fetch(login, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError({
                        active: true,
                        message: data.message,
                    });
                } else {

                    const token = data.token;

                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", `JWT ${token}`);

                    const requestOptions = {
                        method: "GET",
                        headers: myHeaders,
                    };


                    fetch(getUserMe, requestOptions)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log("aqui ando")
                            updateUser(data);
                            notify(data.user.first_name);

                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    ;

                }


            }
            )
            .catch((error) => {
                console.log(error);
            });

    };

    return (

        <>
            
            {
                !loggedInUser ? <>
                <div className="container">
            
            <div id="form">
                <form onSubmit={(e) => HandleSubmit(e)}>
                <div className="boxes">
                <h1 className="loginTitle">Log In</h1>
                    <div className="emailBoxInput">
                    <input
                        onChange={(e) => HandleChage(e)}
                        type="email"
                        id="login"
                        className="emailBox"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    </div>
            
                    <div className="passwordBoxInput">
                    <input
                        onChange={(e) => HandleChage(e)}
                        type="password"
                        id="password"
                        className="passwordBox"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    </div>

                    <div className="loginButton">
                    <input type="submit" className="loginBtn" onClick={(e)=> HandleSubmit(e)} value="Log In" />
                    </div>

                </div>
                    {error.active && (

                        <Alert variant="danger" onClose={() => setError({ active: false, message: "" })} dismissible>
                            <Alert.Heading>{error.message}</Alert.Heading>

                        </Alert>


                    )}

                </form>

                <div id="formFooter">
                    <a className="forgotPassword" href="#">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>

        <ToastContainer />
                </> 
                : <>
                <div className="logSuccess">
                <h1>Log In Succesfully</h1>
                {console.log(loggedInUser)}
                <h3>{`Welcome ${loggedInUser.user.first_name}`}</h3>
                <h3>{`Role: ${loggedInUser.role}`}</h3>
                <button onClick={()=>updateUser(null)}>Log Out</button>
                </div>
                </>
            }
            
        </>
    );
};
    


export default Login



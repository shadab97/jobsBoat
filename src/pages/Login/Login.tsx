import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { makelogin } from '../../Auth/Auth';
import Button from '../../components/Button/Button'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [emailError, setEmailError] = useState<Number>(-1);
    const [passwordError, setPasswordError] = useState<Number>(-1);

    const handleLogin = async () => {
        if (email.trim() === "") {
            setEmailError(1)
            return false
        }
        else if (password.trim() === "") {
            setPasswordError(1)
            return false
        }
        else {
            let res = await makelogin(email, password)
            if (res?.code === 200) {
                // go to home page
                localStorage.setItem("userData", JSON.stringify(res))
                history.push('/dashboard');
                window.location.reload();
            }
            else if (res?.code === 401) {
                setEmailError(1);
                setPasswordError(1)
            }
        }
    }




    return (
        <div className="d-flex  h-100 my-5  justify-content-center align-items-center">
            <div className="card  col-md-4 bg-white box-shadow` p-3">
                <h4 className="text-color">Login</h4>
                <div className="form-group my-2">
                    <label className="text-color" htmlFor="exampleFormControlInput1">Email address</label>
                    <input onChange={(e) => {
                        let val = e.target.value;
                        setEmail(val);
                        setEmailError(-1)
                    }} type="email" className={`${emailError === 1 && "border-danger"} form-control form-control-sm`} id="exampleFormControlInput1" placeholder="Enter your email address" />

                    {
                        emailError === 1 && (
                            <label className="text-danger small" htmlFor="exampleFormControlInput1">Enter Email address</label>

                        )
                    }

                </div>
                <div className="form-group my-2">
                    <div className="d-flex justify-content-between">
                        <label className="text-color" htmlFor="exampleFormControlInput1">Password</label>
                        <label className="brand-color small" htmlFor="exampleFormControlInput1">Forget Your Passowrd</label>
                    </div>
                    <input onChange={(e) => {
                        let val = e.target.value;
                        setPassword(val);
                        setPasswordError(-1)
                    }}
                        type="password" className={`${passwordError === 1 && "border-danger"} form-control form-control-sm`} id="exampleFormControlInput1" placeholder="Enter password" />
                    {
                        passwordError === 1 && (
                            <label className="text-danger small" htmlFor="exampleFormControlInput1">Enter Password</label>

                        )
                    }

                </div>
                <div className="d-flex justify-content-center">
                    <Button text="Login" onClick={handleLogin} />
                </div>

                <div className="text-center">
                    <p onClick={() => history.push('/signup')} className="small" >New to MyJobs? <span className="brand-color pointer">
                        Create an account
                    </span> </p>
                </div>

            </div>
        </div>

    )
}
export default Login

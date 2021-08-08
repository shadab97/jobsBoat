import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { makesignup } from '../../Auth/Auth';
import Button from '../../components/Button/Button'


interface Iuser {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    skills: string,
    userRole: number
}
function SignUp() {
    const history = useHistory();


    const [user, setUser] = useState<Iuser>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        skills: "",
        userRole: -1
    })

    const [resError, setResError] = useState<Number>(-1)
    const [resMessage, setResMessage] = useState<string>("")
    const [nameError, setNameError] = useState<Number>(-1);
    const [emailError, setEmailError] = useState<Number>(-1);
    const [passwordError, setPasswordError] = useState<Number>(-1);
    const [skillsError, setskillsError] = useState<Number>(-1);
    const [confirmPasswordError, setConfirmPasswordError] = useState<Number>(-1);
    const [slectedError, setSetSlectedError] = useState<Number>(-1)

    const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleSignup = async () => {

        if (user.userRole === -1) {
            setSetSlectedError(1);
            return false
        }
        if (user.name.trim() === "" || user.name.trim().length < 3) {
            setNameError(1)
            return false
        }
        else if (user.email.trim() === "" || !emailRe.test(user.email)) {
            setEmailError(1)
            return false
        }
        else if (user.password.trim() === "") {
            setPasswordError(1)
            return false
        }
        else if (user.confirmPassword.trim() === "") {
            setConfirmPasswordError(1)
            return false
        }
        else if (user.skills.trim() === "") {
            setConfirmPasswordError(1)
            return false
        }
        else {
            let res = await makesignup(user)
            if (res?.code === 422) {
                setResError(1)
                setResMessage(res?.message || res?.errors[0]?.name)
            }
            if (res?.code === 201) {
                localStorage.setItem("userData", JSON.stringify(res))
                history.push('/dashboard');
                window.location.reload();
                setResError(1)
                setResMessage(res?.message)
            }
        }
    }
    return (
        <div>
            <div className="d-flex  h-100 my-5  justify-content-center align-items-center">
                <div className="card  col-md-4 bg-white box-shadow` p-3">
                    <h4 className="text-color">Sign up</h4>
                    <div className="form-group my-1">
                        <div className="w-75">
                            <p className="text-color p-0 font-weight-bold  m-0">I'am a</p>
                            <div
                                className={`btn btn-sm ${user.userRole == 0 ? "brand-bg text-white" : "btn-outline-primary text-color"} m-1`}
                                onClick={() => {
                                    setUser({ ...user, userRole: 0 }); setSetSlectedError(1)
                                }}>Recruiter</div>
                            <div
                                className={`btn btn-sm ${user.userRole == 1 ? "brand-bg text-white" : "btn-outline-primary text-color"} m-1`}
                                onClick={() => {
                                    setUser({ ...user, userRole: 1 }); setSetSlectedError(1)
                                }}> Candidate</div>
                        </div>
                        <p className="text-danger small"> {slectedError === -1 && "select user type"}</p>
                    </div>

                    <div className="form-group my-1">
                        <label className="text-color" htmlFor="name">Enter Name</label>
                        <input required onChange={(e) => {
                            let val = e.target.value;
                            setUser({ ...user, name: val });
                            setNameError(-1)
                        }} type="text" className={`${nameError === 1 && "border-danger"} form-control form-control-sm`} id="name" placeholder="Enter your name" />

                        {
                            nameError === 1 && (
                                <label className="text-danger small" htmlFor="email"> Name must be between 3 and 100 characters</label>
                            )
                        }
                    </div>
                    <div className="form-group my-1">
                        <label className="text-color" htmlFor="email">Email address</label>
                        <input required onChange={(e) => {
                            let val = e.target.value;
                            setUser({ ...user, email: val });
                            setEmailError(-1)
                        }} type="email" className={`${emailError === 1 && "border-danger"} form-control form-control-sm`} id="email" placeholder="Enter your email address" />

                        {
                            emailError === 1 && (
                                <label className="text-danger small" htmlFor="email">Enter Email address</label>

                            )
                        }

                    </div>
                    <div className="form-group my-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <label className="text-color" htmlFor="password">Password</label>
                                <input required type="password" className={`${passwordError === 1 && "border-danger"} form-control form-control-sm`} id="password" placeholder="Enter password"
                                    onChange={(e) => {
                                        let val = e.target.value;
                                        setUser({ ...user, password: val });
                                        setPasswordError(-1)
                                    }}
                                />
                                {passwordError === 1 && (<label className="text-danger small" htmlFor="password">Password must be greater than 6 characters.</label>)}
                            </div>
                            <div>
                                <label className="text-color" htmlFor="exampleFormControlInput1">Password</label>
                                <input type="password" className={`${passwordError === 1 && "border-danger"} form-control form-control-sm`} id="exampleFormControlInput1" placeholder="Enter password"
                                    onChange={(e) => {
                                        let val = e.target.value;
                                        setUser({ ...user, confirmPassword: val });
                                        setConfirmPasswordError(-1)
                                    }}
                                />
                                {confirmPasswordError === 1 && (<label className="text-danger small" htmlFor="exampleFormControlInput1">Enter Password</label>)}
                            </div>
                        </div>

                        <div className="form-group my-2">
                            <label className="text-color" htmlFor="skills">Skills</label>
                            <input type="text" className={`${skillsError === 1 && "border-danger"} form-control form-control-sm`} id="skills" placeholder="Enter skills"
                                onChange={(e) => {
                                    let val = e.target.value;
                                    setUser({ ...user, skills: val });
                                    setskillsError(-1)
                                }}
                            />
                            {skillsError === 1 && (<label className="text-danger small" htmlFor="skills">Enter Skills</label>)}

                        </div>


                    </div>
                    <div className="d-flex justify-content-center">
                        <Button text="Signup" onClick={handleSignup} />
                    </div>
                    <p className="text-danger text-center">
                        {
                            resError === 1 && resMessage
                        }
                    </p>

                    <div className="text-center">
                        <p onClick={() => history.push('/login')} className="small" >Have an account? <span className="brand-color pointer">
                            login
                        </span> </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SignUp


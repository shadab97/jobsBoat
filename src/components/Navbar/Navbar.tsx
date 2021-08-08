import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { isLogedIn } from '../../Auth/Auth';

interface props {
    isLogin: boolean;
}

function Navbar({ isLogin }: props) {
    const [logOutbox, setLogoutBox] = useState<Boolean>(false)
    const history = useHistory();

    return (
        <div className="mx-5 custom-border-bottom align-items-center py-2 d-flex justify-content-between">
            <h3 className="text-white" onClick={() => {
                history.push('/dashboard')
            }}>My<span className="brand-color">Jobs</span></h3>
            {
                isLogedIn() ? (
                    <div className="d-flex justify-content-between">
                        <p className="m-2 pointer" onClick={() => history.push('/postjob')}>Post A job</p>
                        <div onClick={() => { setLogoutBox(!logOutbox) }}
                            className="m-2 bg-light text-dark d-flex justify-content-center align-items-center" style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "100%"
                            }}>
                            <h6 className="mt-2 text-uppercase">{JSON.parse(localStorage.getItem("userData") || "").data.name[0]}</h6>
                            <i className=" pl-2 fas fa-caret-down"></i>
                            <div className="bg-dark" style={{
                                position: "relative",
                            }}>
                                {
                                    logOutbox && (
                                        <div className="pointer"
                                            onClick={() => {
                                                localStorage.clear();
                                                history.push('/login')
                                            }}
                                            style={{
                                                position: "absolute",
                                                top: "2rem",
                                                right: 0,
                                                fontSize: "12px",
                                                background: "white",
                                                padding: "5px",
                                                borderRadius: "3px"
                                            }}>
                                            Logout
                                        </div>
                                    )
                                }
                            </div>

                        </div>

                    </div>
                ) : (<div className="btn-sm btn btn-login" onClick={() => history.push('/login')}>Login / Signup</div>)
            }
        </div>
    )
}

export default Navbar

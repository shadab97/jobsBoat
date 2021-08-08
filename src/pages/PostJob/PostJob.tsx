import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { createAJob } from '../../Auth/Auth';

interface Ijob {
    title: string,
    description: string,
    location: string
}
function PostJob() {


    const history = useHistory();
    const [postJobData, setpostJobData] = useState<Ijob>({
        title: "",
        description: "",
        location: ""
    });

    const [titleError, setTitleError] = useState<number>(-1);
    const [descriptionError, setDescriptionError] = useState<number>(-1);
    const [LocationError, SetLocationError] = useState<number>(-1);


    const handleSignup = async () => {
        console.log("POSt")
        if (postJobData.title.trim() === "" || postJobData.title.trim().length < 3) {
            setTitleError(1)
            return false
        }
        else if (postJobData.description.trim() === "" || postJobData.description.trim().length < 3) {
            setDescriptionError(1)
            return false
        }
        else if (postJobData.location.trim() === "" || postJobData.location.trim().length < 3) {
            SetLocationError(1)
            return false
        }
        else {
            let res = await createAJob(JSON.parse(localStorage.getItem("userData") || "")?.data?.token, postJobData)
            console.log(res)
            if (res?.code === 422) {

            }
            if (res?.code === 201) {
                alert("job posted  successfuly ")
                history.push('/dashboard')
            }
        }
    }

    return (
        <div>
            {
                <>
                    <div className=""></div>
                    <div className="modal" id="modelId" tabIndex={-1} role="dialog" style={{ display: "block" }} aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable  modal-lg" role="document" >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Post job</h5>
                                    <button type="button"
                                        className="close text-danger btn btn-sm bg-brand"
                                        data-dismiss="modal" aria-label="Close" onClick={() => history.push('/dashboard')}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body bg-light">
                                    <div className="form-group my-2">
                                        <label className="text-color" htmlFor="title">Title</label>
                                        <input onChange={(e) => {
                                            let val = e.target.value;
                                            setpostJobData({ ...postJobData, title: val })
                                            setTitleError(-1)
                                        }} type="text" className={`${titleError === 1 && "border-danger"} form-control form-control-sm`} id="title" placeholder="Enter title" />

                                        {
                                            titleError === 1 && (
                                                <label className="text-danger small" htmlFor="title">Enter Title</label>
                                            )
                                        }

                                    </div>


                                    <div className="form-group my-2">
                                        <label className="text-color" htmlFor="Description" >Description</label>
                                        <textarea id="Description" onChange={(e) => {
                                            let val = e.target.value;
                                            setpostJobData({ ...postJobData, description: val })
                                            setDescriptionError(-1)
                                        }} className={`${descriptionError === 1 && "border-danger"} form-control form-control-sm`} placeholder="Enter Description" />

                                        {
                                            descriptionError === 1 && (
                                                <label className="text-danger small" htmlFor="Description">Enter description</label>
                                            )
                                        }
                                    </div>
                                    <div className="form-group my-2">
                                        <label className="text-color" htmlFor="Location" >Location</label>
                                        <input type="text" id="Location" onChange={(e) => {
                                            let val = e.target.value;
                                            setpostJobData({ ...postJobData, location: val })
                                            SetLocationError(-1)
                                        }} className={`${LocationError === 1 && "border-danger"} form-control form-control-sm`} placeholder="Enter location" />

                                        {
                                            LocationError === 1 && (
                                                <label className="text-danger small" htmlFor="Location">Enter location</label>
                                            )
                                        }
                                    </div>

                                    <div className="  d-flex justify-content-center ">
                                        <div
                                            onClick={handleSignup}
                                            className="btn brand-bg text-white">
                                            Post
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}

export default PostJob

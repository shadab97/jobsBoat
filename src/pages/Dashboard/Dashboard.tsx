import React, { useState, useEffect } from 'react'
import { getAllJobs, getSingleJobData } from '../../Auth/Auth'
import Card from '../../components/Card/Card';

interface IAllJobs {
    createdAt: string
    description: string
    id: string
    location: string
    title: string
    updatedAt: string
}
function Dashboard() {
    const [alljobs, setAlljobs] = useState<IAllJobs[]>([])
    const [singleJobData, setSingleJobData] = useState<any>([])
    const [jobId, setJobId] = useState<string>("");
    const [jobModal, setJobModal] = useState<boolean>(false);


    const getJobs = async () => {
        let res = await getAllJobs(JSON.parse(localStorage.getItem("userData") || "")?.data?.token);
        setAlljobs(res?.data?.data)
    }

    const getSingleJob = async () => {
        let res = await getSingleJobData(jobId, JSON.parse(localStorage.getItem("userData") || "")?.data?.token)
        console.log("singe job", res)
        setSingleJobData(res?.data)
    }

    useEffect(() => {
        getJobs();
    }, [])
    useEffect(() => {
        getSingleJob();
    }, [jobId])


    return (

        <React.Fragment>
            <div className="container mt-3">
                <h6 className="text-white">Home</h6>
                <div className="container mt-5 text-white">
                    <h5>Jobs posted by you</h5>

                    <div className="row  d-flex flex-wrap align-items-center d-flex">
                        {
                            alljobs?.map((job, i) => (
                                <div
                                    style={{
                                        height: "150px"
                                    }}

                                    key={i} className={`col-md-3 bg-white text-color box  m-1 p-2  box-shadow`}>
                                    <h5>{job?.title}</h5>
                                    <p className="small my-1">{job?.description.slice(0, 50)}...</p>
                                    <div className="mt-1 d-flex align-items-center  d-flex justify-content-between">
                                        <div>
                                            <i className="fas fa-map-marker-alt brand-color"></i> {job.location}
                                        </div>
                                        <div
                                            onClick={() => { setJobId(job?.id); setJobModal(true) }}
                                            className="text-color btn btn-sm bg-dim">
                                            View Appication
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div >
            {
                jobModal && (
                    <>
                        <div className=""></div>
                        <div className="modal" id="modelId" tabIndex={-1} role="dialog" style={{ display: "block" }} aria-labelledby="modelTitleId" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable  modal-lg" role="document" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Applicants for this job</h5>
                                        <button type="button" className="close text-danger btn btn-sm bg-brand" data-dismiss="modal" aria-label="Close" onClick={() => setJobModal(false)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body bg-light">
                                        {
                                            singleJobData?.length < 0 ? (<p>No Applicant</p>
                                            ) : (
                                                <p>Total {singleJobData?.length}  applications</p>
                                            )
                                        }

                                        <div className="row">
                                            {
                                                singleJobData?.map((data) => (
                                                    <div style={{
                                                        height: "150px"

                                                    }} className="col-md-3 card p-3 m-2">
                                                        <div className="info  d-flex justify-content-between">
                                                            <div style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                width: "40px",
                                                                height: "40px",
                                                                textTransform: "uppercase",
                                                                borderRadius: "100%",
                                                                backgroundColor: "#D9EFFF"
                                                            }}>
                                                                {data.name[0]}
                                                            </div>
                                                            <div>
                                                                <h6 className="my-0 text-uppercase">{data.name}</h6>
                                                                <p>{data.email}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="m-0 ">Skills</p>
                                                            <div className="ml-0 d-flex d-wrap">
                                                                {
                                                                    data.skills.split(",").map((e) => (
                                                                        <span className=" small p-1 mx-1 brand-bg rounded-2 text-white">
                                                                            {e}
                                                                        </span>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }


        </React.Fragment>

    )
}

export default Dashboard




const base_url = process.env.REACT_APP_BASE_URL

export const makelogin = (email, password) => {
    return fetch(`${base_url}auth/login`, {
        method: "POST",
        body: JSON.stringify({ "email": email, "password": password }),
        headers: { "Content-type": "application/json" }
    }).then(res => res.json())
        .then((response) => {
            // localStorage.setItem("userData", JSON.stringify(response))
            // console.log("response", response.code);
            return response
        }).catch((error) => {
            console.log("error", JSON.stringify(error))
            return error
        });
}

export const makesignup = (user) => {
    console.log(user)
    return fetch(`${base_url}auth/register`, {

        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" }
    }).then(res => res.json())
        .then((response) => {
            // localStorage.setItem("userData", JSON.stringify(response))
            console.log("response", response.code);
            return response
        }).catch((error) => {
            console.log("error", JSON.stringify(error))
            return error
        });
}

export const isLogedIn = () => {
    if (localStorage.getItem("userData")) {
        let userdata = JSON.parse(localStorage.getItem("userData") || '');
        if (userdata) {
            return true;
        }
        return false;
    }
    else {
        return false;
    }


}


export const getAllJobs = (token) => {

    return fetch(`${base_url}recruiters/jobs/`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        }
    }).then(res => res.json())
        .then((response) => {
            // localStorage.setItem("userData", JSON.stringify(response))
            console.log("response", response);
            return response
        }).catch((error) => {
            console.log("error", JSON.stringify(error))
            return error
        });
}



// https://jobs-api.squareboat.info/api/v1/jobs/
export const createAJob = (token, job) => {
    console.log(job)
    return fetch(`${base_url}jobs/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(job),
    }).then(res => res.json())
        .then((response) => {
            // localStorage.setItem("userData", JSON.stringify(response))
            console.log("response", response);
            return response
        }).catch((error) => {
            console.log("error", JSON.stringify(error))
            return error
        });
}


// https://jobs-api.squareboat.info/api/v1/recruiters/jobs/7b0ce79b-bf2e-4b78-a624-971a04780991/candidates
export const getSingleJobData = (jobId, token) => {

    return fetch(`${base_url}recruiters/jobs/${jobId}/candidates`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        }
    }).then(res => res.json())
        .then((response) => {
            // localStorage.setItem("userData", JSON.stringify(response))
            console.log("response", response);
            return response
        }).catch((error) => {
            console.log("error", JSON.stringify(error))
            return error
        });

}

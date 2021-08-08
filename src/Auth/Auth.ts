const base_url = process.env.REACT_APP_BASE_URL

export const makelogin = (email, password) => {
    return fetch(`${base_url}auth/login`, {
        method: "POST",
        body: JSON.stringify({ "email": email, "password": password }),
        headers: { "Content-type": "application/json" }
    }).then(res => res.json())
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        });
}

export const makesignup = (user) => {
    return fetch(`${base_url}auth/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" }
    }).then(res => res.json())
        .then((response) => {
            return response
        }).catch((error) => {

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
            return response
        }).catch((error) => {
            return error
        });
}

export const createAJob = (token, job) => {
    return fetch(`${base_url}jobs/`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(job),
    }).then(res => res.json())
        .then((response) => {
            return response
        }).catch((error) => {

            return error
        });
}

export const getSingleJobData = (jobId, token) => {

    return fetch(`${base_url}recruiters/jobs/${jobId}/candidates`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": token
        }
    }).then(res => res.json())
        .then((response) => {
            return response
        }).catch((error) => {
            return error
        });

}

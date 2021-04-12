import {makeGetRequest} from "../api/makeRequest";

export const downloadApplicationList = async () => {
    fetch("http://127.0.0.1:5000/application_list")
        .then(res => res.blob())
        .then(blob => {
            console.log(blob)
        })
        .catch(() => alert("Something wrong"))

    // const {data, error, status} = await makeGetRequest("/application_list");
    // console.log(data, status)
    // if (status === 200) return data;
    //
    // throw new Error(error);
};
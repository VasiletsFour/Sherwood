import {baseURL} from "../api/api";

export const downloadApplicationList = async () => {
    const xhr = new XMLHttpRequest()
    const a = document.createElement("a")
    xhr.open("GET", `${baseURL}/application_list`, true)

    const file = new Blob([xhr.response])
    a.href = window.URL.createObjectURL(file);
    a.download = "test.pdf"
    a.click()
    console.log(`${baseURL}/application_list`)
}



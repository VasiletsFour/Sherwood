import {baseURL} from "../api/api";

export const downloadApplicationList = async () => await window.open(`${baseURL}/application_list`, "_self")



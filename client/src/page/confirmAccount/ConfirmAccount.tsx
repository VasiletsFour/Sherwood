import {CONFIRM_ACCOUNT_URL} from "../../utils/urls";
import {getConfirmAccountApi} from "../../request/AccountRequest";
import {useHistory} from "react-router-dom";

interface Props {
    location: Location;
}

export const ConfirmAccount = ({location}: Props) => {
    const history = useHistory()
    const token = location.pathname.replace(CONFIRM_ACCOUNT_URL.urlTemplate + "/", "")

    getConfirmAccountApi(token)
        .then(() => history.push("/login"))
        .catch(() => history.push("/registration"))

    return null
}
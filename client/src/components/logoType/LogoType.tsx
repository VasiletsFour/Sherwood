import React from "react"
import {HOME_URL} from "../../utils/urls";
import {useHistory} from "react-router-dom";
import "./LogoType.scss"

interface Props {
    classname: string
}

export const LogoType = ({classname}: Props) => {
    const history = useHistory()
    const handleLogo = () => history.push(HOME_URL.urlTemplate)

    return (
        <div className={`${classname}__logotypeContainer logoType`} onClick={() => handleLogo()}>
            <p className={`${classname}__logotype logoType__logo`}>Elite</p>
        </div>
    )
}
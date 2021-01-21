import React from "react"
import {Header} from "../../components"
import "./MainLayout.scss"

interface Props {
    children: JSX.Element
}

export const MainLayout = ({children}: Props) => (
        <div className="mainLayout">
            <Header/>
            <main>
                {children}
            </main>
            {/*<Footer/>*/}
        </div>
    )

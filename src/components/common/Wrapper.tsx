import { ReactElement, useState } from "react"
import Sidebar from "../SideBar/sidebar-comp"
import Footer from "./Footer/footer"
import Header from "./Header/header"

const Wrapper = ({ children }: { children: ReactElement }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Wrapper
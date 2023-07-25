import { ReactElement, useState } from "react"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import LeftSideBar from "./LeftSideBar/left_sidebar"
import RightWrapper from "./RightWrapper/right_wrapper"

const Wrapper = ({ children, hasLeftSidebar, hasRightWrapper }: { children: ReactElement, hasLeftSidebar?: boolean, hasRightWrapper?: boolean }) => {

    return (
        <>
            <Header />
            {hasLeftSidebar && <LeftSideBar />}
            {children}
            {hasRightWrapper && <RightWrapper />}
            <Footer />
        </>
    )
}

export default Wrapper
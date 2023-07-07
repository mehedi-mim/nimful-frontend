import { ReactElement, useState } from "react"
import Wrapper from "../Wrapper"

const CenterWrapper = ({ children }: { children: ReactElement}) => {

    return (
        <Wrapper hasLeftSidebar={true} hasRightWrapper={false}>
            <div className="center-wrapper">
            {children}
            </div>
        </Wrapper>
    )
}

export default CenterWrapper
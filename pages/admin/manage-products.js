import { Fragment } from "react"
import Navigation from "../components/ComponentForAdmin/Navigation"
import Title from "../components/ComponentForAdmin/Title"

const ManageProducts= (props)=> {
    return (
        <Fragment>
            <Title />
            <Navigation />
            <div className="fjijaksojirasas">
                <div>Danh sách cửa cuốn</div>
            </div>
        </Fragment>
    )
}

export default ManageProducts
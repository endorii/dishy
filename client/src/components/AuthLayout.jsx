import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className="h-screen bg-[url('./assets/img/OIG.jpg')] bg-right bg-no-repeat">
            <div className="w-[45%] h-screen bg-white">
                <Outlet />
            </div>
            {/* <div className="w-[60%] bg-red-300"></div> */}
        </div>
    )
}
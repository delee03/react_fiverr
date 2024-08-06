import React from "react";
import useRouteCustom from "./hooks/useRouteCustom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//khởi tạo 1 context
export const NotificationContext = React.createContext();

function App() {
    const routes = useRouteCustom();
    // useEffect(() => {
    //     toast("Wow so easy!");
    // });

    //khi gọi tới thuộc tính trong object truyền trong cặp []

    const showNotification = (content, type) => {
        toast[type](content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <>
            <NotificationContext.Provider
                value={{ showNotification: showNotification }}
            >
                <ToastContainer />
                {routes}
            </NotificationContext.Provider>
        </>
    );
}

export default App;

import React from "react";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserFooter from "../../components/UserFooter/UserFooter";
import { Outlet } from "react-router-dom";

const UserTemplate = () => {
    return (
        <div>
            {/* Header */}
            <UserHeader />
            {/* Main */}
            <main>
                <Outlet />
            </main>
            {/* Footer */}
            <UserFooter />
        </div>
    );
};

export default UserTemplate;

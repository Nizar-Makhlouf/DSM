import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import Toolbar from "../components/Toolbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
    Column,
    DashBoardContainer,
    MainContainer,
} from "../styles/components/Dashboard";

const PrivateLayout = () => {
    const user = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/login");
    }, [navigate, user]);
    const [fullWidth, setFullWidth] = useState(true);
    const handleFullWidth = () => setFullWidth(!fullWidth);
    return (
        <DashBoardContainer>
            <Sidebar fullWidth={fullWidth} />
            <Column $fullWidth={fullWidth}>
                <Toolbar onClick={handleFullWidth} fullWidth={fullWidth} />
                <MainContainer>
                    <Outlet />
                </MainContainer>
                <Footer />
            </Column>
        </DashBoardContainer>
    );
};

export default PrivateLayout;

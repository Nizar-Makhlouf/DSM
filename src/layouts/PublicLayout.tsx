import { Outlet, useNavigate } from "react-router-dom";
import { Main } from "../styles/layouts/PublicLayout";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const PublicLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };
    const user = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/private");
    }, [navigate, user]);
    return (
        <>
            <Navbar isOpen={isOpen} toggleOpen={handleOpen} />
            <Main onClick={closeMenu}>
                <Outlet />
            </Main>
        </>
    );
};

export default PublicLayout;

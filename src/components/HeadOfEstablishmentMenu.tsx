import {
    PrivateStyledNavLink,
    SidebarItem,
    SidebarMenu,
} from "../styles/components/Dashboard";
import { FaHome } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";

const HeadOfEstablishmentMenu = () => {
    return (
        <SidebarMenu>
            <SidebarItem>
                <PrivateStyledNavLink to={""}>
                    <FaHome />
                    <span>Accueil</span>
                </PrivateStyledNavLink>
            </SidebarItem>
            <SidebarItem>
                <PrivateStyledNavLink to={"candidat"}>
                    <PiStudentFill />
                    <span>Candidats</span>
                </PrivateStyledNavLink>
            </SidebarItem>
            <SidebarItem>
                <PrivateStyledNavLink to={"vehicle"}>
                    <FaCar />
                    <span>Véhicule</span>
                </PrivateStyledNavLink>
            </SidebarItem>
        </SidebarMenu>
    );
};

export default HeadOfEstablishmentMenu;

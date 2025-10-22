import { Logo } from "../styles/components/Navbar";
import {
    SidebarContainer,
    SidebarHeader,
} from "../styles/components/Dashboard";
import HeadOfEstablishmentMenu from "./HeadOfEstablishmentMenu";
interface SidebarProps {
    fullWidth: boolean;
}
const Sidebar = ({ fullWidth }: SidebarProps) => {
    return (
        <SidebarContainer $fullWidth={fullWidth}>
            <SidebarHeader>
                <Logo>DSM</Logo>
            </SidebarHeader>
            <HeadOfEstablishmentMenu />
        </SidebarContainer>
    );
};

export default Sidebar;

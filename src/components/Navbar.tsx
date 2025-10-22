import { useMediaQuery } from "@react-hook/media-query";
import {
    Button,
    Header,
    Li,
    Logo,
    MenuButton,
    Nav,
    NavLinkWrapper,
    SNavLink,
    Span,
    Ul,
} from "../styles/components/Navbar";
import { NavbarProps } from "../types/NavbarProps";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = ({ isOpen, toggleOpen }: NavbarProps) => {
    const matches = useMediaQuery("(max-width: 720px)");
    const closeMenu = () => {
        if (isOpen) toggleOpen();
    };
    return (
        <Header onClick={closeMenu}>
            {matches ? (
                <>
                    <Nav>
                        <NavLinkWrapper to={""}>
                            <Logo>DMS</Logo>
                        </NavLinkWrapper>
                        <MenuButton onClick={toggleOpen} $isOpen={isOpen}>
                            <Span></Span>
                            <Span></Span>
                            <Span></Span>
                        </MenuButton>
                    </Nav>
                    <Ul $isOpen={isOpen}>
                        <Li data-tooltype="Accueil">
                            <SNavLink to={""}>
                                <IoHomeOutline />
                                <span>Accueil</span>
                            </SNavLink>
                        </Li>
                        <Li data-tooltype="Démonstration">
                            <SNavLink to={"/demo"}>Démonstration</SNavLink>
                        </Li>
                        <Li data-tooltype="Nos Offres">
                            <SNavLink to={"/offers"}>Nos Offres</SNavLink>
                        </Li>
                        <Li data-tooltype="Contacter Nous">
                            <SNavLink to={"/contact"}>Contacter Nous</SNavLink>
                        </Li>
                        <Button>
                            <SNavLink to="/login">Se connecter</SNavLink>
                        </Button>
                    </Ul>
                </>
            ) : (
                <Nav>
                    <NavLinkWrapper to={""}>
                        <Logo>DMS</Logo>
                    </NavLinkWrapper>
                    <Ul $isOpen={false}>
                        <Li data-tooltype="Accueil">
                            <SNavLink to={""}>
                                <IoHomeOutline />
                                {/* Accueil */}
                            </SNavLink>
                        </Li>
                        <Li data-tooltype="Démonstration">
                            <SNavLink to={"/demo"}>Démo</SNavLink>
                        </Li>
                        <Li data-tooltype="Nos Offres">
                            <SNavLink to={"/offfers"}>Offres</SNavLink>
                        </Li>
                        <Li data-tooltype="Contacter Nous">
                            <SNavLink to={"/contact"}>Contacte</SNavLink>
                        </Li>
                    </Ul>
                    <Button>
                        <SNavLink to="/login">Se connecter</SNavLink>
                    </Button>
                </Nav>
            )}
        </Header>
    );
};

export default Navbar;

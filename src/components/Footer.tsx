import { FooterContainer } from "../styles/components/Dashboard";
interface FooterProps {
    fullWidth?: boolean;
}
const Footer = ({fullWidth} : FooterProps) => {
    return <FooterContainer $fullWidth={fullWidth}>Footer</FooterContainer>;
};

export default Footer;

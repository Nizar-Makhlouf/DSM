import {
    CentralHeaaderContainer,
    LeftHeaderContainer,
    MainHeaderContainer,
    RightHeaderContainer,
    SidebarToogleButton,
} from "../styles/components/Dashboard";
import SearchInputField from "./SearchInputField";

interface ToolBarProps {
    fullWidth: boolean;
    onClick: () => void;
}
const Toolbar = ({ fullWidth, onClick }: ToolBarProps) => {
    return (
        <MainHeaderContainer $fullWidth={fullWidth}>
            <LeftHeaderContainer>
                <SidebarToogleButton onClick={onClick} $fullWidth={fullWidth}>
                    {">"}
                </SidebarToogleButton>
                <SearchInputField />
            </LeftHeaderContainer>
            <CentralHeaaderContainer></CentralHeaaderContainer>
            <RightHeaderContainer></RightHeaderContainer>
        </MainHeaderContainer>
    );
};

export default Toolbar;

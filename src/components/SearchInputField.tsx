import {
    SearchBox,
    SearchButton,
    SearchInput,
} from "../styles/components/SearchInput";
import { IoSearchOutline } from "react-icons/io5";

const SearchInputField = () => {
    return (
        <SearchBox>
            <SearchInput type="text" />
            <SearchButton>
                <IoSearchOutline />
            </SearchButton>
        </SearchBox>
    );
};

export default SearchInputField;

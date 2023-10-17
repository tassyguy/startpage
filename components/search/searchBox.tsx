import SearchBoxField from "./searchBox/searchBoxField";
import SearchBoxContainer from "./searchBoxContainer/SearchBoxContainer";
import SearchEngineSwitcher from "./searchEngineSwitcher/searchEngineSwitcher";

export default function SearchBox() {
    return(
        <div>
            <p>This is the Search Box</p>
            <SearchBoxContainer></SearchBoxContainer>
            <SearchBoxField searchEngine={'Google'}></SearchBoxField>
            <SearchEngineSwitcher></SearchEngineSwitcher>
        </div>
    )
}
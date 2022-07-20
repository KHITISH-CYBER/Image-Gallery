import React, { useState } from "react";
import {
    Button,
    InputDiv,
    InputField,
    InputForm,
    SearchContainer,
} from "./StyledComp";

const SearchBar = ({ searchQuery }) => {
    const [query, setQuery] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        searchQuery(query);
    };

    return (
        <SearchContainer>
            <InputForm onSubmit={submitHandler}>
                <InputDiv>
                    <InputField
                        type="text"
                        placeholder="Search Image Term..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button type="submit">Search</Button>
                </InputDiv>
            </InputForm>
        </SearchContainer>
    );
};

export default SearchBar;

import React, {FormEvent, useRef} from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)

    const SearchHandler = (event: FormEvent) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
    }

    return (
        <form onSubmit={(event) => {
            SearchHandler(event)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
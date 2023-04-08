import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown/>}
            >
                Sort Selector
            </MenuButton>
            <MenuList>
                {/*{data.map((platform) =>*/}
                {/*    <MenuItem*/}
                {/*        key={platform.id}*/}
                {/*        onClick={() => onSelectedPlatform(platform)}*/}
                {/*    >*/}
                {/*        {platform.name}*/}
                {/*    </MenuItem>*/}
                {/*)}*/}
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
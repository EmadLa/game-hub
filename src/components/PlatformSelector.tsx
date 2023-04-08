import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown, BsChevronRight} from "react-icons/all";
import usePlatform from "../hooks/usePlatform";
import {Platform} from "../hooks/UseGames";

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectedPlatform, selectedPlatform}: Props) => {
    const {data, error} = usePlatform();
    if (error) return null;
    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronDown/>}
            >
                {selectedPlatform?.name}
            </MenuButton>
            <MenuList>
                {data.map((platform) =>
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectedPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector
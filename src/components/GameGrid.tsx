import React, {Fragment} from "react";
import {Text} from "@chakra-ui/react";
import useGames from "../hooks/UseGames";

const GameGrid = () => {
    const {games, error} = useGames();
    return (
    <Fragment>
        {error && <Text color="red">{error}</Text>}
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    </Fragment>
    );
};

export default GameGrid;
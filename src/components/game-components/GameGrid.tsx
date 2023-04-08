import React, {Fragment} from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "../../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../../hooks/useGenre";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    // console.log(data);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <Fragment>
            {error && <Text color="red">{error}</Text>}
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 5}}
                padding={10}
                spacing={3}
            >
                {isLoading && skeletons.map(
                    skeleton => <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)}
                {data.map(
                    game => <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>)}
            </SimpleGrid>
        </Fragment>
    );
};

export default GameGrid;
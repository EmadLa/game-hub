import React, {useState} from "react";
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/game-components/GameGrid";
import GenreList from "./components/genre-components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import {Genre} from "./hooks/useGenre";
import {Platform} from "./hooks/UseGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;

}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: "1fr",
                lg: '200px 1fr'
            }}
        >
            <GridItem area="nav"><NavBar/></GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={
                            (genre) => setGameQuery({...gameQuery, genre})
                        }
                        selectedGenre={gameQuery.genre}
                    /></GridItem>
            </Show>
            <GridItem area="main">
           <HStack spacing={5} paddingLeft={2} marginBottom={5}>
               <PlatformSelector
                   selectedPlatform={gameQuery.platform}
                   onSelectedPlatform={
                       (platform) => setGameQuery({...gameQuery, platform})
                   }
               />
               <SortSelector/>
           </HStack>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    );
}

export default App

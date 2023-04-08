import React, {useState} from "react";
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/game-components/GameGrid";
import GenreList from "./components/genre-components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import {Genre} from "./hooks/useGenre";
import {Platform} from "./hooks/UseGames";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
                            (genre) => setSelectedGenre(genre)
                        }
                        selectedGenre={selectedGenre}
                    /></GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector
                    selectedPlatform={selectedPlatform}
                    onSelectedPlatform={
                        (platform) => setSelectedPlatform(platform)
                    }
                />
                <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    );
}

export default App

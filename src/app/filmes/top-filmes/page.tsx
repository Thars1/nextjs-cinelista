import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopularMovies, getTopMovies } from "@/lib/api/tmdb";

export const dynamic = "force-static";

const TopFilmes = async () => {
    const filmes = await getTopMovies();
    return(
        <>
        <Title title="TOP Filmes"/>
        <Grid filmes={filmes}/>
        </>
    );
}

export default TopFilmes;
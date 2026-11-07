import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopularMovies } from "@/lib/api/tmdb";
export const revalidate = 60;// Atualiza a cada 60 segundos
const FilmesPopulares = async () => {
    const filmnes = await getPopularMovies();
    return(
        <>
        <Title title="Filmes Populares"/>
        <Grid filmes={filmnes}/>

        </>
    );
}

export default FilmesPopulares;

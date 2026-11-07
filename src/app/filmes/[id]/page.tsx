import { notFound } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import styles from './DetalheFilme.module.css'
import { getMovieDetails } from '@/lib/api/tmdb';

type Props = {
    params:Promise<{
        id: number
    }>
}


export const generateMetadata = async ({params}: Props) =>{
    const {id} = await params;
    //Fazer a chamadade API
    const details = await getMovieDetails(id);

    if(!details)
        return;

    if(details){
        return{
            title: `${details.title} | Cinelista`,
            description: details.overview,
            openGraph: {
                title: `${details.title} | Cinelista`,
                description: details.overview,
                images: [`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`]
            }
        }
    }
}

const DetalheFilme = async ({params} : Props) =>{
    const {id} = await params;
    //Fazer a chamadade API
    const details = await getMovieDetails(id);

    if(!details)
        return notFound();

    const {title, poster_path, overview} = details;

    return(
        <>
            <div className={styles.detalhes}>
                <div className={styles.detalhes__container}>
                    <Link className={styles.detalhes__voltar} href="/">
                        Voltar
                    </Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__imag} src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} alt={`Poster do filme ${title}`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                        <h2>Detalhes do Filme: {details?.title}</h2>
                        <p>{overview}</p>
                    </article>
                </section>
                </div>
            </div>
                    </>
    );
}

export default DetalheFilme;
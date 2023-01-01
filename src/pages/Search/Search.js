import styles from './search.module.css'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import PostDetails from './../../components/PostDetails/PostDetails';
import { Link } from 'react-router-dom';

function Search() {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments('posts', search)

    return (
        <div className={styles.search_container}>
            <h2>Search</h2>
            <div className="post-list">
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts a partir da sua busca</p>
                        <Link to='/' className='btn btn-dark'>Voltar</Link>
                    </>
                )}
                {posts && posts.map((post) => (
                    <PostDetails key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Search
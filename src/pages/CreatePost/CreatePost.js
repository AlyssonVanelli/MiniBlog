import styles from './createpost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useIntertDocument } from '../../hooks/useInsertDocument'

function CreatePost() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { insertDocument, response } = useIntertDocument('posts')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL valida")
        }

        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos")
        }

        if (formError) return

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        navigate("/")
    }

    return (
        <div className={styles.create_post}>
            <h2>Criar Post</h2>
            <p>Escreva sobre oque quiser e compartilhe o seu conhecimento</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input type="text" name='title' required placeholder='Pense num bom título...' value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input type="text" name='image' required placeholder='Insira uma imagem que representa seu post' value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea name="body" required placeholder='Insira o conteúdo do post' value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input type="text" name='tags' required placeholder='Insira as tags separadas por virgula' value={tags} onChange={(e) => setTags(e.target.value)} />
                </label>
                {!response.loading && <button className='btn'>Cadastrar</button>}
                {response.loading && <button className='btn' disabled>Aguarde...</button>}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    )
}

export default CreatePost
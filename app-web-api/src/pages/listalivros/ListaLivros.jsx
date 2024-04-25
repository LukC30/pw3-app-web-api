import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './listalivros.module.css';
import Message from '../../components/form/message.jsx';
import Container from '../../components/container/container.jsx';
import Cardbook from '../../components/cardbook/cardbook.jsx';

function ListaLivros() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Books', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setBooks(data);
            console.log(books);
        }).catch((error) => {
            alert(`erro amigao: ${error}`)
        })
    }, [])
    const location = useLocation();
    let message = ''
    console.log('location state: ' + location.state);

    if (location.state) {
        message = location.state;
    };

    return (
        <section className={styles.livro_container}>
            <h1>Listagem</h1>
            <span>Aqui seus livros serão listados</span>
            {
                message && <Message
                    msg={message}
                    type='sucess'
                />
            }
            {/* <Container> */}
            <Cardbook
                id={'oi'}
                name={'xisde'}
                actor={"to cansadito"}
                category={'categoria'}

            />
            <Cardbook
                id={'oi'}
                name={'xisde'}
                actor={"to cansadito"}
                category={'categoria'}

            />
            <Cardbook
                id={'oi'}
                name={'xisde'}
                actor={"to cansadito"}
                category={'categoria'}

            />
            {/* </Container> */}


        </section>
    );

};

export default ListaLivros;
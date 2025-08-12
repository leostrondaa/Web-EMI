import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import { 
    Label,
    Input,
    Submit,
} from "./style"
import Client from '../../api/client';


export default function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    
    function sendData() {

        const user = { name: name, email: email }
        // console.log(user)

        Client.post('users', user).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

        navigate('/')
    }

    return (
        <>
            <NavigationBar />
             <Container className='mt-2'>
                <Label>Nome</Label>
                 <Input
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Label>E-mail</Label>
                 <Input
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Submit value="Voltar" onClick={() => navigate('/user')  }/>
                <Submit value="Cadastrar" onClick={() => sendData() }/>
             </Container>
        </>
    )
    
}
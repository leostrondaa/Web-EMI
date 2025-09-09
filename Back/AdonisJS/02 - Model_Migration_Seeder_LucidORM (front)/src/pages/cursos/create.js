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
    const [duration, setDuration] = useState('')
    const navigate = useNavigate();
    
    function sendData() {

        const user = { nome: name, duracao: duration }
        // console.log(user)

        Client.post('cursos', user).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

        navigate('/cursos')
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
                <Label>Duração (anos)</Label>
                 <Input
                    type="number" 
                    id="duration" 
                    name="duration" 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <Submit value="Voltar" onClick={() => navigate('/cursos')  }/>
                <Submit value="Cadastrar" onClick={() => sendData() }/>
             </Container>
        </>
    )
    
}
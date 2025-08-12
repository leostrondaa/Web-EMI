import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import { 
    Label,
    Input,
    Submit,
} from "./style"
import Client from '../../api/client';


export default function Edit() {

    const location = useLocation();
    const user = location.state?.user;

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function updateUser() {

        const upUser = { name: name, email: email }
        
        Client.put("users/" + user.id, upUser).then(response => {
            setShow(true);
        })
        .catch(error => {
            console.error(error);
        });
    }

    const handleClose = () => {
        setShow(false)
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
                <Submit value="Alterar" onClick={() => updateUser() }/>
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Atualização - Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>Operação Efetuda com Sucesso!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
    
}
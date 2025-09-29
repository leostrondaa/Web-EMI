import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Modal, Button } from 'react-bootstrap';
import NavigationBar from '../../components/navigationbar';
import { OrbitProgress } from "react-loading-indicators";
import { Client } from '../../api/client';
import { getPermissions } from '../../service/PermissionService';
import { getDataUser } from '../../service/UserService';

export default function DeleteAluno() {

    const location = useLocation();
    const aluno = location.state?.item;

    const [load, setLoad] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const permissions = getPermissions();
    const dataUser = getDataUser();

    function verifyPermission() {
        if (!dataUser) navigate('/login');
        else if (permissions.deleteAluno === 0) navigate(-1);
    }

    useEffect(() => {
        verifyPermission();
    }, []);

    function deleteAluno() {
        setLoad(true);

        Client.delete(`alunos/${aluno.id}`)
            .then(response => {
                console.log("aluno excluído com sucesso:", response.data);
                setShow(true);
            })
            .catch(error => {
                console.error("Erro ao excluir aluno:", error);
            })
            .finally(() => {
                setLoad(false);
            });
    }

    const handleClose = () => {
        setShow(false);
        navigate('/alunos');
    }

    return (
        <>
            <NavigationBar />

            <Container className='mt-4'>
                <h4>Confirmar Exclusão</h4>
                <p>Tem certeza que deseja excluir o aluno?:</p>

                {
                    load
                        ? <OrbitProgress variant="spokes" color="#dc3545" size="medium" />
                        : <>
                            <Button variant="secondary" onClick={() => navigate('/matriculas')} className="me-2">
                                Cancelar
                            </Button>
                            <Button variant="danger" onClick={deleteAluno}>
                                Excluir
                            </Button>
                        </>
                }
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Aluno excluído</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    O aluno foi excluída com sucesso.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import { OrbitProgress } from "react-loading-indicators";
import NavigationBar from '../../components/navigationbar';
import DataTable from '../../components/datatable';
import { Client } from '../../api/client'
import UserContext from '../../contexts/UserContext'
import { getDataUser } from '../../service/UserService';
import { getPermissions } from '../../service/PermissionService';


export default function Home() {

    const [data, setData] = useState([])
    const [dataCurso, setDataCurso] = useState([])
    const [curso, setCurso] = useState([])
    const [load, setLoad] = useState(true)
    const navigate = useNavigate();
    // const { user } = useContext(UserContext);
    const dataUser = getDataUser()
    const permissions = getPermissions()

    function fetchData() {

        setLoad(true)
        setTimeout(() => {
            Client.get('cursos')
                .then(res => {
                    const cursos = res.data;
                    console.log(cursos);
                    setDataCurso(cursos.data);  // salva a lista de cursos no estado
                })
                .catch(error => {
                    console.log(error);
                    // alert('ERROR')
                });


            Client.get('alunos').then(res => {
                const alunos = res.data
                console.log(alunos)
                setData(alunos.data)
            })
                .catch(function (error) {
                    console.log(error)
                    // alert('ERROR')
                })
                .finally(() => {
                    setLoad(false)
                })


        }, 1000)
    }

    function verifyPermission() {
        // Não Autenticado   
        if (!dataUser) navigate('/login')
        // Não Autorizado (rota anterior)
        else if (permissions.listDisciplina === 0) navigate(-1)
    }

    useEffect(() => {
        verifyPermission()
        fetchData()
    }, []);

    

    return (
        <>
            <NavigationBar />
            {
                load
                    ?
                    <Container className="d-flex justify-content-center mt-5">
                        <OrbitProgress variant="spokes" color="#32cd32" size="medium" text="" textColor="" />
                    </Container>
                    :

                    <Container className='mt-2'>
                        <DataTable
                            title="Alunos Registrados"
                            rows={['Nome', 'Cursos', 'Ações']}
                            hide={[false, false, false]}
                            data={data}
                            keys={['nome', 'cursoId']}
                            resource='alunos'
                            crud={['viewAluno', 'createAluno', 'editAluno', 'deleteAluno']}
                        />
                    </Container>
            }
        </>
    )
}


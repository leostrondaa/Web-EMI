import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { OrbitProgress } from "react-loading-indicators";
import NavigationBar from '../../components/navigationbar';
import DataTable from '../../components/datatable';
import Client from '../../api/client';

export default function Home() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)

    function fetchData() {

        setLoad(true) 
        setTimeout(() => {
            
            Client.get('cursos').then(res => {
                const users = res.data
                console.log(users)
                setData(users.data)  
            })
            .catch(function(error) {
                console.log(error)
            })
            .finally( () => {
                setLoad(false)
            })

        }, 1000)
    }

    useEffect(() => {
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
                        title="Cursos Registrados" 
                        rows={['Nome', 'Duração (anos)', 'Ações']}
                        hide={[false, true, false]}
                        data={data}
                        keys={['nome', 'duracao']}
                        resource='cursos'
                    />
                </Container>
            }
        </>
    )
}


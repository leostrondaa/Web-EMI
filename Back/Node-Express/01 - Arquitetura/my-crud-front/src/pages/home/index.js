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
            
            Client.get('users').then(res => {
                const users = res.data
                setData(users)  
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
                        title="Usuários Registrados" 
                        rows={['Nome', 'E-mail', 'Ações']}
                        hide={[false, true, false]}
                        data={data}
                        keys={['name', 'email']}
                        resource='users'
                    />
                </Container>
            }
        </>
    )
}


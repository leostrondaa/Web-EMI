import {Component} from "react";

export default class Clients extends Component {

    state = {
        data: [],
        load: true,
        error: null, 
    };

    componentDidMount() {
        this.loadDataAPI();
    }

    async loadDataAPI() {

        try {
            const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!apiResponse.ok) {
                throw new Error('ERRO - response!!');
            }
            const json = await apiResponse.json();
            this.setState({ data: json });
            console.log(this.state.data);

        } catch (e) {
            this.setState = { error: e };
        } finally { 
            this.setState({ load: false });
        }
    }
    
    render() {
      return (
        <div style={{marginTop: "10px"}}>
            {
                this.state.load ? 
                    <p>Carregando...</p>
                : 
                this.state.error ? 
                    <p>Erro: { this.error.message }</p>
                :
                    <div>
                        <hr/>
                        {
                            this.state.data.map((item) => (
                                <p key={item.id}>{item.name} - ({item.email})</p>
                            ))
                        }
                        <hr/>
                    </div>
            }
        </div>
      );
    }
  }
  

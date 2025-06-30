import logo from './logo.svg';
import './App.css';
import { StateEffect } from './Components/StateEffect';
import Reducer from './Components/Reducer';
import Memo from './Components/Memo';
import CallBack from './Components/CallBack';
import Ref from './Components/Ref';
import { Header, Profile } from './Components/Context';
import UserProvider from './Providers/UserProvider';

function App() {

  const arr = [
  	{ id: 1, name: 'Geladeira' },
  	{ id: 2, name: 'Microondas' },
  	{ id: 3, name: 'Sofá' },
  	{ id: 4, name: 'Forno Elétrico' },
  	{ id: 5, name: 'Televisão' },
  	{ id: 6, name: 'Air Fryer' },
  	{ id: 7, name: 'Aparador' },
  	{ id: 8, name: 'Mesa' },
  	{ id: 9, name: 'Mesanino' },
  ];

  return (
    <div className="App">
      <StateEffect />

      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>

      <Reducer />
      <Memo products={arr} />
      <CallBack />
      <Ref />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Link from './components/link';
import Counter from './components/counter';
import List from './components/list';
import Mega from './components/mega';
import Clients from './components/clients';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Link url="https://www.gileduardo.com.br" name="homepage"/>
      <Counter value="10"/>
      <List/>
      <Mega/>
      <Clients/>
    </div>
  );
}

export default App;

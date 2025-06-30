import './App.css';
import UserProvider from './Providers/UserProvider';
import Header from './Components/Header';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </div>
  );
}

export default App;

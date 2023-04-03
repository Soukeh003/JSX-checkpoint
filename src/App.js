import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './Components/AppNavBar';
import ProfilePhoto from './Components/ProfilePhoto';
import Address from './Components/Address';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <ProfilePhoto/>
      <Address/>
    </div>
  );
}

export default App;

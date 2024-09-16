
import './App.css';
import { Routes,Route } from 'react-router-dom';
import LobbyScreen from './screens/Lobby';
import RoomPage from './screens/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LobbyScreen></LobbyScreen>}/>
        <Route path='/room/:roomId' element={<RoomPage></RoomPage>} />
      </Routes>
      
    </div>
  );
}

export default App;

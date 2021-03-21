import './App.css';
import Profile from './profile/Profile';
import photo from './profile/ka7la.png'
function App() {
  return (
    <div className="App">
      <Profile  bio='hello go my code' profession='etudiant' >
        <img src={photo}/></Profile>
    </div>
  );
}

export default App;

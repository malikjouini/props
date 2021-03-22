import './App.css';
import Profile from './profile/Profile';
import photo from './profile/ka7la.png';



function App() {
  const styleObject = { color: "grey", textAlign: 'center', fontFamily: 'fantasy' }
  return (
    <div className="App" style={styleObject}>
      <Profile bio='hello go my code' profession={123}>
        <img src={photo} /></Profile>
    </div>
  );

}

export default App;

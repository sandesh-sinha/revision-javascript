import './App.css';
import UserOutput from './Components/UserOutput';
import  {useState}  from 'react';
import UserInput from './Components/UserInput'
function App() {
  const [username, setUsername] = useState('sandy');
  const handleChange = (event) => { 
    setUsername(event.target.value);
  }
  return (
    <div className="App">
      <h1>Assignment</h1>
      <UserOutput username='sandy'> <UserInput username='sandy'/></UserOutput>
      <UserOutput username={username} ><UserInput changed={handleChange} username={username}/> </UserOutput>
      <UserOutput username='apple'> <UserInput username='apple'/> </UserOutput>
    </div>
  );
}

export default App;

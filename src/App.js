import logo from './logo.svg';
import './App.css';
import Set from './components/MedicalSet'

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/medical-set/get-all').then(response => {
      console.log(response.data);
      setPosts(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, [setPosts]);

  return (
    <div className='App'>
      {posts.map(post => (
        <Set set={post}></Set>
      ))}
    </div>
  );
}

export default App;

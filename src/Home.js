import React from 'react';
import app from "./base";
import './Home.css';

const Home = ()=> {
  return (
    <div className="Home">
      African Masks Home Page
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
}


export default Home;
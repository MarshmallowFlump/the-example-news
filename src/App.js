import './App.css';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import ArticlePage from './components/ArticlePage/ArticlePage'
import Header from './components/Header';
import MyProfile from './components/UserProfile/MyProfile.js';
import MyArticlesPage from './components/MyArticles/MyArticlesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getUser } from './utils/api'

function App() {
  
  const user = 'jessjelly';

  const [ profile, setProfile ] = useState({});

  useEffect(() => {
    getUser(user)
    .then((res) => {
        setProfile(res.user);
    })
}, [user]);

  return (
    <BrowserRouter>

      <div className="App">

        <Header />

          <div className='content'>

              <Routes>

                <Route path="/" element={<ArticlesPage profile={profile}/> } /> 

                <Route path="/articles" element={<ArticlesPage profile={profile}/>} />

                <Route path="/articles/:article_id" element={<ArticlePage profile={profile}/>} />
                
                <Route path="/users/:username" element={<MyProfile profile={profile}/>}  />

                <Route path="/my-articles/:user_id" element={<MyArticlesPage profile={profile}/> } />

              </Routes>  
           
          </div>
      
      </div>

    </BrowserRouter>
  );
}

export default App;

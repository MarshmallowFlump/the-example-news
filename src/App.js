import './App.css'
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import ArticlePage from './components/ArticlePage/ArticlePage'
import Header from './components/Header';
import UserArticles from './components/UserArticles/UserArticles';
import UserProfiles from './components/UserProfiles/UserProfiles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getUser } from './utils/api'
import PostNewArticle from './components/UserArticles/NewArticleComponents/PostNewArticle';

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

        <Header name={user}/>

          <div className='content'>

              <Routes>

                <Route path="/" element={<ArticlesPage profile={profile}/> } /> 

                <Route path="/articles" element={<ArticlesPage profile={profile}/>} />

                <Route path="/articles/:article_id" element={<ArticlePage profile={profile}/>} />
                
                <Route path="/users/:user_id" element={<UserProfiles />} />

                <Route path="/users/:user_id/articles" element={<UserArticles profile={profile} /> } />

                <Route path="/users/:user_id/post-new-article" element={<PostNewArticle /> } />

              </Routes>  
           
          </div>
      
      </div>

    </BrowserRouter>
  );
}

export default App;

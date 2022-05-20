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
import LoadingSpin from './components/reuseable/LoadingSpin';
import Error404 from './components/Error404';
function App() {
  
  const user = 'jessjelly';

  const [ loading, setLoading ] = useState(true);

  const [ profile, setProfile ] = useState({});

  useEffect(() => {
    getUser(user)
    .then((res) => {
        setProfile(res.user);
        setLoading(false);
    })
}, [user]);

return loading ? (<LoadingSpin />) : (
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
                
                <Route path='*' element={<Error404 />} />
              
              </Routes>  
           
          </div>
      
      </div>

    </BrowserRouter>
  );
}

export default App;

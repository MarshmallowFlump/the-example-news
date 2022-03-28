import './App.css';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import ArticlePage from './components/ArticlePage/ArticlePage'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/User'
import { useState } from 'react/cjs/react.development';

function App() {
  
  const [ user, setUser ] = useState('jess_jelly');

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <div className="App">
        <Header />
          <div className='content'>
              <Routes>

              <Route path="/" element={<ArticlesPage />} /> 
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:article_id" element={<ArticlePage />} />

              </Routes>  
           

          </div>
        
      
      </div>

    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

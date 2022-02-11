import './App.css';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import ArticlePage from './components/ArticlePage/ArticlePage'
import Header from './components/Header';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

function App() {
  return (
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
        
  );
}

export default App;

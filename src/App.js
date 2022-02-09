import './App.css';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import ArticlePage from './components/ArticlePage/ArticlePage'
import Header from './components/Header';

function App() {
  return (
        <div className="App">
      <Header />
      <ArticlesPage />
      <ArticlePage />
      </div>

  );
}

export default App;

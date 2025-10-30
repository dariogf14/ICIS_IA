import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import EmptyState from './components/EmptyState';

const initialArticles = [
  { id: 'a1', title: 'React 19 ya está aquí', category: 'React', pinned: true },
  { id: 'a2', title: 'Novedades en CSS: View Transitions', category: 'CSS', pinned: false },
  { id: 'a3', title: 'State Management con Zustand', category: 'React', pinned: false },
  { id: 'a4', title: 'El futuro de JavaScript: Records y Tuples', category: 'JavaScript', pinned: false },
];

function App() {
  const [articles, setArticles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');

  const handlePin = (id) => {
    setArticles(prev => {
      return prev.map(a => ({
        ...a,
        pinned: a.id === id ? !a.pinned : false
      }));
    });
  };

  const filtered = articles.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = categoryFilter === 'Todas' || a.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  const sorted = [...filtered].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">📰 Feed de Noticias</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="text-center mb-3">
        {['Todas', 'React', 'CSS', 'JavaScript'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`btn mx-1 ${categoryFilter === cat ? 'btn-primary' : 'btn-outline-primary'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {sorted.length > 0 ? (
        <ArticleList articles={sorted} handlePin={handlePin} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
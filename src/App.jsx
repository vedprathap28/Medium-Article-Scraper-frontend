import React, { useState } from 'react';
import axios from 'axios';
import ArticleList from './assets/articlesList';
import './assets/app.css';

const App = () => {
  const [topic, setTopic] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic) {
      setError('Please enter a topic');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/scrape', { topic });
      setArticles(response.data);
    } catch (err) {
      setError('Failed to fetch articles');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-container'>
      <div className='center'>
        <img
          src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
          alt="Medium Logo"
          className="medium-logo"
        />
      </div>
      <div className='content-center'>
        <h1>Article Scraper</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic"
          />
          <button type="submit">Search</button>
        </form>
        {loading && <div className="spinner"></div>}
        {error && <p className='center'>{error}</p>}
      </div>
      {!loading && !error && <ArticleList articles={articles} />}
    </div>
  );
};

export default App;
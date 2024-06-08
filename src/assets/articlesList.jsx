// src/components/ArticleList.js
import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
          <p>{article.author} - {article.publicationDate}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;

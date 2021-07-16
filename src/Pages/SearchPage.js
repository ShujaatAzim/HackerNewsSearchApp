import React, { useState } from 'react';

const SearchPage = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [articles, setArticles] = useState([])

  const handleSearch = e => {
    e.preventDefault();
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.hits)
      setArticles(data.hits)
    });
  }

  return (
    <div>
      <h3>Search Page</h3>
      <br />
      <div>
        <form onSubmit={e => {handleSearch(e)}}>
          <label>Search HackerNews:</label>
          <br />
          <input type="text" placeholder="enter search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        {articles.length !== 0 ? 
        <ul>
          {articles.map(article => {
            return (
              <li key={article.objectID}><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></li>
            )
          })}
        </ul>
        : null }
      </div>
    </div>
  );
}

export default SearchPage;
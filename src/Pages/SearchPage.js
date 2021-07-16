import React, { useState } from 'react';

const SearchPage = props => {

  const [searchTerm, setSearchTerm] = useState("")
  const [articles, setArticles] = useState([])

  const { prevSearchTerms, setPrevSearchTerms } = props;

  const handleSubmit = e => {
    e.preventDefault()
    let newSearchTermsList = [...prevSearchTerms]
    newSearchTermsList.push(searchTerm)
    setPrevSearchTerms(newSearchTermsList)

    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    .then(resp => resp.json())
    .then(data => {setArticles(data.hits);console.log(data.hits)})
  }

  return (
    <div>
      <h3>Search Page</h3>
      <br />
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <label>Search HackerNews:</label>
          <br />
          <input type="text" placeholder="enter search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.objectID}><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchPage;
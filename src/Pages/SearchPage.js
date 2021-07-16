import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { prevSearchTermsState } from '../Recoil/atoms';

const SearchPage = props => {

  const [searchTerm, setSearchTerm] = useState("")
  const [searched, setSearched] = useState(false)
  const [prevSearchTerms, setPrevSearchTerms] = useRecoilState(prevSearchTermsState)
  const [articles, setArticles] = useState([])

  const handleSearch = e => {
    e.preventDefault();
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
    .then(resp => resp.json())
    .then(data => {
      setSearched(true)
      setArticles(data.hits.filter(e => e.title !== null && e.title !== ""))
    })
    .then(() => setSearchTerm(""))
  }

  const handleTerms = e => {
    e.preventDefault();
    const terms = [...prevSearchTerms]
    terms.push(searchTerm)
    setPrevSearchTerms(terms)
  }

  return (
    <div>
      <h3>Search Page</h3>
      <br />
      <div>
        <form onSubmit={e => {handleSearch(e);handleTerms(e)}}>
          <label>Search HackerNews:</label>
          <br />
          <input type="text" placeholder="enter search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        {searched && articles.length !== 0 ? 
        <ul>
          {articles.map(article => {
            return (
              <li key={article.objectID}><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></li>
            )
          })}
        </ul>
        : articles.legnth === 0 ? <h5>No results match your query!</h5> : null }
      </div>
    </div>
  );
}

export default SearchPage;
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { prevSearchTermsState } from '../Recoil/atoms';
import { Form, Button, Input } from 'semantic-ui-react';

const SearchPage = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [lastSearched, setLastSearched] = useState(null)
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
    .then(() => setLastSearched(searchTerm))
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
        <Form onSubmit={e => {handleSearch(e);handleTerms(e)}}>
          <Form.Field>Search HackerNews:</Form.Field>
          <br />
          <Input type="text" placeholder="enter query" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <br /><br />
          <Button color="primary" type="submit" disabled={searchTerm === ""}>Search</Button>
        </Form>
      </div>
      <br />
        {searched && lastSearched && articles.length !== 0 ? 
          <div>
            <h4>Showing results for "{lastSearched}"</h4>
            <ul>
              {articles.map(article => {
                return (
                  <li key={article.objectID}><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></li>
                )
              })}
            </ul>
          </div>
        : articles.legnth === 0 ? <h5>No results match your query!</h5> : null }
    </div>
  );
}

export default SearchPage;
import React from 'react';

const HistoryPage = props => {

  const { prevSearchTerms, setPrevSearchTerms } = props;

  return (
    <div>
      <ul>
        {prevSearchTerms.map(term => {
          return <li>{term}</li>
        })}   
      </ul>
      <button onClick={() => setPrevSearchTerms([])}>Clear Search History</button>
    </div>
  );
}

export default HistoryPage;
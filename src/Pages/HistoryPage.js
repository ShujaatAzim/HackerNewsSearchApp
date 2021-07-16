import React from 'react';
import { useRecoilState } from 'recoil';
import { prevSearchTermsState } from '../Recoil/atoms';

const HistoryPage = () => {

  const [prevSearchTerms, setPrevSearchTerms] = useRecoilState(prevSearchTermsState)

  return (
    <div>
      {prevSearchTerms.length === 0 ? <h5>No searches performed yet in this session!</h5> : 
        <div>
          <h5>Previous searches for this session:</h5>
          <ul>
            {prevSearchTerms.map((term, index) => {
              return <li key={index}>{term}</li>
            })}   
          </ul>
          <button onClick={() => setPrevSearchTerms([])}>Clear Search History</button>
        </div>
      }
    </div>
  );
}

export default HistoryPage;
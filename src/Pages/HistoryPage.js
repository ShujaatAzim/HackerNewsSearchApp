import React from 'react';
import { useRecoilState } from 'recoil';
import { prevSearchTermsState } from '../Recoil/atoms';
import { Button } from 'semantic-ui-react';

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
          <Button color="red" onClick={() => setPrevSearchTerms([])}>Clear Search History</Button>
        </div>
      }
    </div>
  );
}

export default HistoryPage;
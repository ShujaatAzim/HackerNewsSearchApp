import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const HomePage = () => {

  const history = useHistory();

  return (
    <div>
      <h3>Welcome to Hacker News Search!</h3>
      <h5>By Shujaat Azim</h5>
      <div>
        <Button color="primary" onClick={() => history.push("/history")}>Search History</Button>
        <Button color="primary" onClick={() => history.push("/search")}>Search HN</Button>
      </div>
    </div>
  );
}

export default HomePage;
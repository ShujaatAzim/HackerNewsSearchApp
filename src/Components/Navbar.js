import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {

  const history = useHistory();
  const location = useLocation();

  return (
    <Menu secondary>
      <Menu.Item onClick={() => history.push("/")} disabled={location.pathname === "/"}>Home</Menu.Item>
      <Menu.Item onClick={() => history.push("/history")} disabled={location.pathname === "/history"}>History</Menu.Item>
      <Menu.Item onClick={() => history.push("/search")} disabled={location.pathname === "/search"}>Search</Menu.Item>
      {/* <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu.Menu> */}
    </Menu>
  );
}

export default Navbar;

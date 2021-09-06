import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./App.module.css";
import quranLogo from "./icon/quran.svg";
import { Quran, Hadits, Tafsir } from "./page";

const App = () => {
  return (
    <Router>
      <Navigation>
        <Button>
          <Link to="/quran">
            <Logo src={quranLogo} alt="quran" />
          </Link>
        </Button>
        <Button>
          <Link to="/hadits">hadits</Link>
        </Button>
        <Button>
          <Link to="/tafsir">Tafsir</Link>
        </Button>
      </Navigation>

      <Switch>
        <Route path="/quran">
          <Quran />
        </Route>
        <Route path="/hadits">
          <Hadits />
        </Route>
        <Route path="/Tafsir">
          <Tafsir />
        </Route>
      </Switch>
    </Router>
  );
};

const Navigation = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  display: flex;
  flex-direction: column;
  background-color: #476c78;
`;
const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 1em;
  outline: none;
  border: none;
  border-radius: 5px;
`;
const Logo = styled.img`
  color: white;
  height: 25px;
`;

export default App;

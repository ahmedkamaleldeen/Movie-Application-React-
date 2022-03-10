import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Moviedetails from "./Components/Moviedetails";
import Favorates from "./Components/Favorates";
import { LanguageContext } from "./context/language";
import { useState } from "react";
import { PageNumber } from "./context/PageNumber";
function App() {
  const [lang, setlang] = useState("ar");
  const [pageNumber, setpageNumber] = useState("2");
  
  return (
    <LanguageContext.Provider value={{ lang, setlang }}>
      <PageNumber.Provider value={{ pageNumber, setpageNumber }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={MovieList} />
            <Route path={"/movielist"} exact component={MovieList} />
            <Route path={"/movie-details/:id"} component={Moviedetails} />
            <Route path={"/favorates"} component={Favorates} />
          </Switch>

          {/* <MovieList /> */}
        </BrowserRouter>
      </PageNumber.Provider>
    </LanguageContext.Provider>
  );
}

export default App;

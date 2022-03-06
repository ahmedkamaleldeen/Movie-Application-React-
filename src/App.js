import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Moviedetails from "./Components/Moviedetails";
import Favorates from "./Components/Favorates";
import {LanguageContext} from './context/language'
import { useState } from "react";
function App() {

  const [lang,setlang]=useState('ar');
  return (
    <LanguageContext.Provider value={{lang,setlang}}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={MovieList} />
        <Route path={'/movielist'} exact component={MovieList} />
        <Route path={"/movie-details/:id"} component={Moviedetails}/>
        <Route path={"/favorates"} component={Favorates}/>
      </Switch>

      {/* <MovieList /> */}
    </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;

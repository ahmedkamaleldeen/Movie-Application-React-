import logo from "./logo.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Moviedetails from "./Components/Moviedetails";
import Favorates from "./Components/Favorates";

function App() {
  return (
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
  );
}

export default App;

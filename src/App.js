import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import PublicGists from "./swr/PublicGists";
import GistDetails from "./swr/GistDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PublicGists} exact />
          <Route path="/:gistId" component={GistDetails} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

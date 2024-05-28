import { Route, Switch } from "wouter";
import Landing from "./pages/landing/Page";
import Dashboard from "./pages/dashboard/Page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/patient" component={Dashboard} />
      </Switch>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

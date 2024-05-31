import { Route, Switch } from "wouter";
import Landing from "./pages/landing/Page";
import Dashboard from "./pages/dashboard/Page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/patient/:id" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch } from "wouter";
import Landing from "./pages/landing/Page";
import Dashboard from "./pages/dashboard/Page";
import Header from "./Header";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/patient/:id" component={Dashboard} />
    </Switch>
  </div>
);

export default App;

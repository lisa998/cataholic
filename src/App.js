import "./App.css";
import Nav from "./component/Nav/Nav";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/Menu";
import { Switch, Route } from "react-router-dom";
import { content as breeds } from "./component/Home/Sort/content";
import { content as behaviors } from "./component/Home/Behavior/content";
import Article from "./component/Home/Article/Article";
import { lazy, Suspense } from "react";
const page = ["ContactUs", "Breeds", "Adopt", "Behavior", "About"];
const p = page.map((ele) =>
  lazy(() => import(`./component/Pagination/${ele}/${ele}`))
);

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          {breeds.map((ele, i) => (
            <Route
              path={`/${ele.title.toLowerCase().replace(" ", "-")}`}
              key={i}
            >
              <Article content={ele} breeds />
            </Route>
          ))}
          {behaviors.map((ele, i) => (
            <Route
              path={`/${ele.title.toLowerCase().replace(" ", "-")}`}
              key={i}
            >
              <Article content={ele} />
            </Route>
          ))}
          {p.map((ele, i) => (
            <Route path={"/" + page[i].toLowerCase()} component={ele}></Route>
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

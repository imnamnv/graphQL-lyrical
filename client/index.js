import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client"; // send request to GraphQL server and store the data locally
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import "./style/style.css";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({}); // assum that /graphql is available. otherwise, need to add config

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));

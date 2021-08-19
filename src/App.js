import { Route, Switch } from "react-router-dom";
import AllMeetupPages from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMettup";
import FavoritePages from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupPages></AllMeetupPages>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path='/favorite'>
          <FavoritePages></FavoritePages>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

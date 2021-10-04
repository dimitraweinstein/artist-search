import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ArtistSearch } from '../../containers/ArtistSearchContainer';
import { ArtistDetail } from '../../containers/ArtistDetailContainer';
import { SongList } from '../songs/SongList';

export default function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/:albumid">
          <SongList />
        </Route>
        <Route exact path="/:id">
          <ArtistDetail />
        </Route>
        <Route exact path="/">
          <ArtistSearch />
        </Route>
      </Switch>
    </Router>
  );
}

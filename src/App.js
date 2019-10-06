import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';
import './App.sass';

import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      filterData: [],
      loading: true
    }
  }

  componentDidMount() {
    console.log("Component mounted");
    if(this.state.data !== []) {
      axios.get('https://api.punkapi.com/v2/beers?per_page=80')
        .then(beers => {
          console.log(beers);
          this.setState({data: beers.data, filterData: beers.data});
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.setState({loading: false});
        })
    }
  }

  toggleFavorite = (e, id) => {
    e.stopPropagation();
    this.setState(prevState => {
      let beer = prevState.data.find(beer => beer.id === id);
      if(beer.favorite === undefined) {
        beer.favorite = true;
      } else {
        beer.favorite = !beer.favorite;
      }

      return({
        data: prevState.data
      })
    })
  }

  renderBeers = (props) => {
    return (
      <Beers loading={this.state.loading} data={this.state.filterData} toggleFavorite={this.toggleFavorite} onSearch={this.handleSearch} {...props}/>
    );
  }

  renderFavoriteBeers = (props) => {
    const favBeers = this.state.data.filter(beer => beer.favorite === true);
    return (
      <Beers loading={false} data={favBeers} toggleFavorite={this.toggleFavorite} {...props} />
    )
  }

  renderSingleBeer = (props) => {
    const _id = parseInt(props.match.params.id);
    const single = this.state.data.find(beer => beer.id === _id);
    return (
      <SingleBeer beer={single} />
    )
  }

  handleSearch = (search) => {
    this.setState(prev => {
      if(search === '') {
        return ({
          filterData: prev.data
        })
      } else {
        const filtered = prev.data.filter(d => d.name.indexOf(search) !== -1);
        return ({
          filterData: filtered
        })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact render={this.renderBeers}/>
          <Route path="/favorites" component={this.renderFavoriteBeers} />
          <Route path="/beer/:id" component={this.renderSingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;

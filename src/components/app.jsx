import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectGifId: "jOgRWnCyyRqLaCjHMS"
    };

    this.search();
  };

  search = (query) => {
    // API call
    giphy('RC8nO1mREg1Uv7NrLfkIyKSbtNFv7lUe').search({
      q: query,
      rating: 'g',
      limit: 16
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  };

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
  });

  render() {
    const gifs = [
      { id: "jOgRWnCyyRqLaCjHMS" },
      { id: "l0HlCk6LMJ4C0WZxu" }
    ];

    return (
      <div className="row">
        <div className="card-columns">
          <div className="card col-sm-8 col-md-8 col-lg-8">
            <div className="left-scene">
              <SearchBar searchFunction={this.search} />
              <div className="selected-gif">
                <Gif id={this.state.selectGifId} />
              </div>
            </div>
          </div>

          <div className="card col-sm-4 col-md-4 col-lg-4">
            <div className="right-scene">
              <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;

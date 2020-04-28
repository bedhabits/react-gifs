import React from 'react';
import Gif from './gif';

// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map(({ id, selectGif }) => {
//       return <Gif id={id} key={id} selectGif={selectGif} />;
//     });
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         { this.renderList() }
//       </div>
//     );
//   }
// }

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(({ id }) => <Gif id={id} key={id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;

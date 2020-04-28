import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  // handleKeyDown = (ev) => {
  //   // check keys if you want
  //   if (ev.keyCode === 1) {
  //     this.focus();
  //   }
  // }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
    // const src = () => {
    //   const { id } = this.props;
    //   if (!id) {
    //     return null;
    //   }

    //   return `https://media0.giphy.com/media/${id}/giphy.gif`;
    // };

    // return (
    //   <img
    //     className="gif"
    //     alt=""
    //     src={src()}
    //     onClick={this.handleClick}
    //   />
    // );
  }
}

export default Gif;

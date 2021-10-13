import React from 'react';
import ReactDOM from 'react-dom';

// const NapsListItem = (props) => (
//   <li>
//     At {props.time}, baby took a {props.note} nap.
//   </li>
// );

class NapsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDelete(this.props.note, this.props.time);
  }

  render() {
    return (
      <li>
        At {this.props.time}, baby took a {this.props.note} nap.
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}

export default NapsListItem;
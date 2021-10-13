import React from 'react';
import ReactDOM from 'react-dom';

// const FeedingsListItem = (props) => (
//   <li>
//     At {props.time}, baby had {props.note} of milk.
//   </li>
// );

class FeedingsListItem extends React.Component {
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
        At {this.props.time}, baby had {this.props.note} of milk.
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}

export default FeedingsListItem;
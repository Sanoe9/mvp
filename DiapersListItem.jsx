import React from 'react';
import ReactDOM from 'react-dom';

// const DiapersListItem = (props) => (
//   <li>
//     At {props.time}, baby had {props.note} diaper changed.
//   </li>
// );

class DiapersListItem extends React.Component {
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
        At {this.props.time}, baby had {this.props.note} diapers changed.
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}

export default DiapersListItem;
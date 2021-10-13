import React from 'react';
import ReactDOM from 'react-dom';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventValue: 'feedings',
      timeValue: '',
      noteValue: ''
    };

    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEventChange(e) {
    this.setState({eventValue: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({timeValue: e.target.value});
  }

  handleNoteChange(e) {
    this.setState({noteValue: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.eventValue, this.state.timeValue, this.state.noteValue);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Type of activity:
            <select value={this.state.eventValue} onChange={this.handleEventChange}>
              <option value="feedings">Feeding</option>
              <option value="naps" >Nap</option>
              <option value="diapers">Diaper</option>
            </select>
          </label>
          <br />
          <label>
            Time of activity:
            <input type="text" value={this.state.timeValue} onChange={this.handleTimeChange}>
            </input>
          </label>
          <br />
          <label>
            Note:
            <input type="text" value={this.state.noteValue} onChange={this.handleNoteChange}></input>
          </label>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default ActivityForm;
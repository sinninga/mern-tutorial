import React, { Component } from 'react';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  render() {
    return (
      <div>
        <p>You are on the Create Exercise Component!</p>
      </div>
    )
  }
}

import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { incId } from '../actions/nextId';
import { Form } from 'semantic-ui-react'

class NoteForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state
    const { id, dispatch } = this.props;
    const note = { id, name };
    dispatch(addNote(note))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => this.setState({ name: e.target.value })

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
        <input
          required
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Write a new note...'
        />
      </Form.Field>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm);

import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { Card } from 'semantic-ui-react';

const filtered = (notes, activeFilter) => {
  switch (activeFilter) {
    case 'Active':
      return notes.filter( t => !t.complete )
    case 'Completed':
      return notes.filter( t => t.complete)
    default:
      return notes;
  }
}

const NoteList = ({ notes, filter }) => (
    <Card.Group itemsPerRow={4}>
      { filtered(notes, filter).map( t => <Note key={t.id} {...t} /> )}
    </Card.Group>
)


const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(NoteList);

// ul may work if card doesn't

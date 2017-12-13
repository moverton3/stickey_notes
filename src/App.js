import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Footer from './components/Footer';
import { Container } from 'semantic-ui-react'


const App = () => (
  <div>
    <Container>
    <br />
    <Footer />
    <br />
    <NoteForm />
    <br />
    <NoteList />
  </Container>
  </div>

)

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import Notes from './components/Notes';

const App = () => {
  return (
    <div>
      <Header />
      <NoteInput />
      <Notes />
    </div>
  );
}

export default App;

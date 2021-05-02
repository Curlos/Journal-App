import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import NoteInput from './components/NoteInput';

const App = () => {
  return (
    <div>
      <Header />
      <NoteInput />
    </div>
  );
}

export default App;

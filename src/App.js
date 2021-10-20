import {Component, toChildArray} from 'preact';

import styles from './App.scss';
import HomePage from './components/home/HomePage';

class App extends Component {

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }

}

export default App;

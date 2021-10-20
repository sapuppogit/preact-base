import {Component} from 'preact';

import styles from './index.scss';

class HomePage extends Component {


  render() {
    return (
      <div className={styles.homeComponent}>
        You're Welcome!
      </div>
    );
  }
}

export default HomePage;

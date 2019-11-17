import Header from "./components/Header.jsx";
import styles from "./index.module.scss";

export default class App extends Component {
  render = () => (
    <div className={styles.mainBorder}>
      <Header />
      test passed
    </div>
  );
}
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
       <h1>Daniel Rodrigues</h1>
        <div id="desc">Welcome to my homepage! here's some of my links.</div>
        <br />
        <li>
          <ul><a href="https://github.com/danielrdrigues" target="blank" rel="mysaite">Github</a></ul>
          <ul><a href="https://www.linkedin.com/in/danielrdrigues/" target="blank" rel="mysaite">Linkedin</a></ul>
          <ul><a href="mailto:drdriguesd@gmail.com">Mail</a></ul>
          <ul><a href="https://t.me/Danielrdrigues" target="blank" rel="mysaite">Telegram</a></ul>
          
        </li>
      </header>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./global.css";

import styles from "./app.module.css";
import ContentView from "./components/ContentView";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <ContentView />
      </main>
    </>
  );
}

export default App;

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK-I7-kg1ycnsjG9t0D0VIE4r6XWV-Psw",
  authDomain: "portfolio-ef257.firebaseapp.com",
  databaseURL: "https://portfolio-ef257.firebaseio.com",
  projectId: "portfolio-ef257",
  storageBucket: "portfolio-ef257.appspot.com",
  messagingSenderId: "677839119559",
  appId: "1:677839119559:web:54d27a4948ac974ddd0ae2",
  measurementId: "G-8S1FEL2YH9",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

function App() {
  return (
    <div className="App">
      <div className="DarkLayer">
        <Layout>
          <Route path="/projects" component={Projects} />
          <Route path="/background" component={Background} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          {/* <Home /> */}
        </Layout>
      </div>
    </div>
  );
}

export default App;

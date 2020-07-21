import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./css/bootstrap.min.css";
import "./css/style.css";

class App extends Component {

  componentDidMount() {
      AOS.init();
  }

render() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}}

export default App;

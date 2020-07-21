import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Product from './pages/Product';
import Blog from './pages/Blog';

function Header() {
    return (
        <div data-aos="fade-in" data-aos-duration="1500">
            <header>
                <div className="jumbotron jumbotron-fluid">
                    <div className="gradient r-0"></div>
                    <nav className="navbar navbar-expand-lg pad">
                        <div className="container">
                            <Link className="navbar-brand" to="/"><span className="txtLogo">B</span><span>aseAfrique</span></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active mr-4">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item active mr-4">
                                        <Link className="nav-link" to="/services">Service</Link>
                                    </li>
                                    <li className="nav-item active mr-4">
                                        <Link className="nav-link" to="/products">Products</Link>
                                    </li>
                                    <li className="nav-item active mr-4">
                                        <Link className="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item active mr-4">
                                        <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Product} />
            <Route path="/blog" component={Blog} />
        </div>
    )
}

export default Header;
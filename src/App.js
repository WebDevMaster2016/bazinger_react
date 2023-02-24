import {BrowserRouter, Outlet} from 'react-router-dom';
import Router from "./components/router";
import Header from "./components/header";
import Footer from "./components/footer";

import './assets/scss/_page-styles/common.scss';
import "./assets/scss/_page-styles/index.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className="main">
                <Router/>
                <Outlet/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

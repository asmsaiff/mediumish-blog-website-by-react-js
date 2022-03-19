import FrontPage from './components/pages/FrontPage'
import {Routes, Route} from "react-router-dom";
import React from "react";
import Header from "./components/partials/Header";
import PageHeader from "./components/partials/PageHeader";
import Footer from "./components/partials/Footer";
import Author from "./components/pages/Author";
import SinglePage from "./components/pages/SinglePage";


function App() {
    return (
        <>
            <Header />
            <PageHeader />

            <Routes>
                <Route path="/" element={<FrontPage />}/>
                <Route path="/author" element={<Author />}/>
                <Route path="/post/:postId" element={<SinglePage />}/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;

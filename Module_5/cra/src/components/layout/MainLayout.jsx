import React from "react";
import Header from './Header';
import Footer from './Footer';

function MainLayout(props) {
    const { children } = props
    return (
        <div className='d-flex flex-column vh-100'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default MainLayout;
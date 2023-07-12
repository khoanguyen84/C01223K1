import React from "react";
import Header from './Header';
import Footer from './Footer';

function MainLayout(props) {
    const { children } = props
    return (
        <div className='d-flex flex-column vh-100'>
            <Header />
            <main className="flex-shrink-0">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default MainLayout;
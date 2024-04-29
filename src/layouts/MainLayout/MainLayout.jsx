import React from 'react'
import { useLocation } from 'react-router-dom'
import './Layout.css'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

export const MainLayout = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const generateBreadcrumbs = () => {
        const productName = location.pathname
            .split('/')
            .filter((path) => path)[1]
        return (
            <div className="breadcrumbs">
                <span onClick={() => navigate('/')}>Products</span>
                {productName && (
                    <span onClick={() => navigate(`/read/${productName}`)}>
                        {' '}
                        &gt; {productName}
                    </span>
                )}
            </div>
        )
    }

    return (
        <div className="grid-container">
            <div className="title">Ads Manager! (By Haf)</div>
            {generateBreadcrumbs()}
            <div className="content">{children}</div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer-container">
            <div>
                <h3>A random footer</h3>
            </div>
            <div>
                <h3>Don't mind the info here</h3>
            </div>
            <div>
                <h3>About this footer</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </footer>
    )
}

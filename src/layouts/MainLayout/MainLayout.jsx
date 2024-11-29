import React from 'react'
import { useLocation } from 'react-router-dom'
import './Layout.css'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
export const MainLayout = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => console.log(data))
    }, [])
    const generateBreadcrumbs = () => {
        const productName = location.pathname
            .split('/')
            .filter((path) => path)[1]
        return (
            <div className="breadcrumbs">
                <span onClick={() => navigate('/')}>Maquinas</span>
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
            <div className="title">Machine Manager! (By Haf)</div>
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
                <h3>footer</h3>
            </div>
            <div>
                <h3></h3>
            </div>
            <div>
                <h3>About</h3>
                <p></p>
            </div>
        </footer>
    )
}

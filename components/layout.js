import React from 'react'
import Heder from './Heder/index.js'
import Burger from './/Heder/burger/index.js'
import Footer from './Footer/index.js'

export default function Layout({ children }) {
    return (
        <>
            {/* <Heder /> */}
            <Burger />
            {children}
            <Footer />
        </>
    )
}
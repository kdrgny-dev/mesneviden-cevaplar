import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
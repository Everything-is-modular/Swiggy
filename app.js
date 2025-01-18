import React from 'react'
import './index.css'
import Header from './modules/header'
import Body from './modules/body'
import Footer from './modules/footer'

const App = props => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
export default App
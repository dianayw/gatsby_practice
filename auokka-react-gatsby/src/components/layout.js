import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Banner from "./banner"
import Footer from "./footer"
import "../styles/reset.css"
import "../styles/global.module.css"
import "../styles/accessibility.css"

const Layout = ({ children }) => {
  return (
    <>
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Header />
      <Banner />
      <main id="primary">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./index.module.css"
// METHOD 1 REACT-GA
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-240638716-1"; // GA_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug:true });
ReactGA.pageview('test-init-pageview-bbbbbbbbbb'); //todelete 

//METHOD 2
//typeof window !== "undefined" && window.gtag("event", "click", { ...data })

const IndexPage = () => (
  <Layout>
    <Seo
      title="The home page"
      description="You can customize the SEO text here."
      image="/logo.png"
      pathname="/"
      // Boolean indicating whether this is an article:
      // article
    />
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Welcome to the Project</h1>
      <div>
        <p>This is the site we built together using Gatsby.</p>
        <p>
          Though it may not look like much, it holds all the essentials you'll
          need to get started building your own sites with Gatsby.
        </p>
        <p>
          Make sure to check out the updated templates to see how the SEO
          component is used, updated gatsby-node.js file for an additional
          function to handle markdown articles without subject taxonomies, and
          feel free to use this site as a template to build your own sites with
          Gatsby!
        </p>
        <p>
          And finally, lykke til from me to you on your journey with Gatsby!
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

/* 404 page */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <section className="wrapper error">
            <SEO title="404: Not found" />
            <h1 className="main-headline error">NOT FOUND</h1>
            <p className="main-text error">Error - Main</p>
            <p className="second-text error">Error - Second</p>
            <Link className="back-to-index" to="/">Go back to the home/index</Link>
        </section>
    </Layout>
)

export default NotFoundPage

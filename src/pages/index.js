import React from "react"
// import Image from "../components/image"
import Header from "../components/header"
import Hero from "../components/hero.js"
import Body from "../components/body.js"
import Footer from "../components/footer.js"
const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>

  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>

  // <Header />
  // <Hero />
  // <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  // <Body />

  <div>
    <Header />
    <div>
      <Hero />
      <Body />
      <Footer />
    </div>
  </div>
)

export default IndexPage

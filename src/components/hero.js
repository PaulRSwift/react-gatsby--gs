import React from "react"
// import Image from "../components/image"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import BackgroundImage from "../images/g500_hero_image.jpg"

//intentially using image as a background to demonstarte using background-image properties and
//manual responsive design as apposed to Gatsby's built in ability

// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "g500_hero_image.jpg" }) {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Img
//         fluid={data.placeholderImage.childImageSharp.fluid}
//         // style={{
//         //   position: "absolute",
//         //   left: 0,
//         //   top: 0,
//         //   width: "100%",
//         //   height: "100%",
//         // }}
//       />
//     )}
//   />
// )

export default () => (
  <div class="hero--wrapper">
    <div
      class="hero--image"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    />
  </div>
)

// {
//   /* <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
//     Hello background!
//   </div> */
// }

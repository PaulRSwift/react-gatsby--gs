import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ImageTwo from "../components/image"

const ImageOne = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "g500_image_1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

export default () => (
  <div class="body">
    <div class="body--inner-wrapper">
      <div class="body-content--flex body-content-right">
        <div class="flex-child flex-child--copy">
          <h2>Neque porro quisquam est qui</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae orci sit amet mi varius commodo quis ac erat. Aliquam erat
            volutpat. Cras tincidunt massa id pharetra tincidunt. Nulla
            tincidunt est felis. In leo nisi, luctus sed dignissim ut, posuere
            vitae orci. Nulla facilisi. Suspendisse purus libero, pellentesque
            id urna non, efficitur euismod tellus. Mauris hendrerit ex id enim
            feugiat, vitae iaculis elit placerat. Morbi efficitur leo in laoreet
            viverra. Quisque lobortis dignissim viverra.
          </p>
        </div>
        <div class="flex-child">
          <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
            <ImageOne />
          </div>
        </div>
      </div>

      <div class="body-content--flex">
        <div class="flex-child flex-child--copy">
          <h2>Neque porro quisquam est qui</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae orci sit amet mi varius commodo quis ac erat. Aliquam erat
            volutpat. Cras tincidunt massa id pharetra tincidunt. Nulla
            tincidunt est felis. In leo nisi, luctus sed dignissim ut, posuere
            vitae orci. Nulla facilisi. Suspendisse purus libero, pellentesque
            id urna non, efficitur euismod tellus. Mauris hendrerit ex id enim
            feugiat, vitae iaculis elit placerat. Morbi efficitur leo in laoreet
            viverra. Quisque lobortis dignissim viverra.
          </p>
        </div>
        <div class="flex-child">
          <ImageTwo />
        </div>
      </div>
      <div class="body-contact">
        <div class="body-contact--inner">
          <form>
            <div class="body--contact--input">
              <label for="input1">Full Name</label>
              <input width="48" type="text" id="name" />
            </div>
            <div class="body--contact--input">
              <label for="input1">Email &#42;</label>
              <input type="text" id="email" />
            </div>
            <div class="body--contact--input input--lg">
              <label for="input1">Message</label>
              <input type="text" id="message" />
            </div>
            <input
              id="contactSubmit"
              class="body--contact-submit"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
)

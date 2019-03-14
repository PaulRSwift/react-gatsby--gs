import React from "react"

export default () => (
  <div class="header">
    <div class="header-inner--wrapper ">
      <h1>Gulfstream</h1>
      <ul class="header-nav-triplet">
        <li class="header-subnav-anchor--aircraft">
          <h4>Aircraft</h4>
          <ul class="header-accordion">
            <li>
              <a
                href="http://www.gulfstream.com/aircraft/gulfstream-g650er"
                title="G650ER: new tab"
                target="_blank"
              >
                G650ER
              </a>
            </li>
            <li>
              <a
                href="http://www.gulfstream.com/aircraft/gulfstream-g650"
                title="G650"
              >
                G650
              </a>
            </li>
            <li>
              <a href="#">G600</a>
            </li>
            <li>
              <a href="#">G500</a>
            </li>
            <li>
              <a href="#">G550</a>
            </li>
            <li>
              <a href="#">G280</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Support</h4>
        </li>
        <li>
          <h4>Contact</h4>
        </li>
      </ul>
    </div>
  </div>
)

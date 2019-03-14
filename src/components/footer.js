import React from "react"

// let oldYear = document.getElementById("footer--copywrite-year")

// console.log("oldyear" + oldYear)
// // var year = oldYear.getFullYear()

export default () => (
  <div class="footer">
    <div class="footer--inner">
      <div class="footer-copy-container">
        <h2>Gulfstream Aerospace Corporation</h2>
        <div>
          <h2>
            &#169; <span id="footer--copywrite-year">2018 </span>
          </h2>
        </div>
      </div>
    </div>
  </div>
)

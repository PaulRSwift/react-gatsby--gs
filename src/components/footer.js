import React from "react"

function autoCopyright() {
  let currentDate = document.getElementsByClassName("footer--copywrite-year")

  for (let i = 0; i < currentDate.length; i++) {
    var d = new Date()
    currentDate[i].innerHTML = d.getFullYear()
  }
}

autoCopyright()

export default () => (
  <div class="footer">
    <div class="footer--inner">
      <div class="footer-copy-container">
        <h2>Gulfstream Aerospace Corporation </h2>
        <h2>
          {" "}
          &#169; <span class="footer--copywrite-year" />
        </h2>
      </div>
    </div>
  </div>
)

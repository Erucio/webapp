import React from 'react'

function footer() {
  return (
    <footer>
      <section class="footer">
          <div class="container">
              <div className="links">
                  <a href='https://www.facebook.com' target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href='https://www.instagram.com' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href='https://www.twitter.com' target="_blank"><i class="fa-brands fa-twitter"></i></a>
                  <a href='https://www.google.com' target="_blank"><i class="fa-brands fa-google"></i></a>
                  <a href='https://www.linkedin.com' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <div className="copyright">
                  <p>&copy; Copyright 2022 FIXXO</p>
                  <div class="signature">
                  <   p>Win22 Javascript Frontend Erick Johansson inlämningsuppgift</p>
                  </div>
              </div>
          </div>

      </section>
    </footer>
  )
}

export default footer
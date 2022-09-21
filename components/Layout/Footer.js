import Link from 'next/link'
import React from 'react'

function Footer() {
   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/8/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4) {
              if (xhttp.status == 200) {
                  document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                  document.getElementById("showlabel").style.display = "block";
                  window.setTimeout(function() {
                     window.location.href = "/thank-you-lp"
                  }, 3000);

              } else {
                  alert('There was a problem with the request.');
              }
          }
      };
      xhttp.send("your-email=" + event.target.fmail.value)

  }

    return (
        <footer className="footer-area footer-bg2">
         <div className="footer-top pt-100 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-widget footer-widget-color1">
                        <div className="footer-logo">
                           <Link href="/"><a>
                           <img src="/assets/img/whitelogo.png" alt="Images"/>
                           </a>
                           </Link>
                        </div>
                        <p>
                           Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies.
                        </p>
                        <div className="social-link-content">
                           <h3 className="title">Follow Us On</h3>
                           <ul className="social-footer-link">
                              <li>
                                 <a href="https://www.facebook.com/blanchardresearchandtrainingindia" target="_blank">
                                 <i className='bx bxl-facebook'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.linkedin.com/company/blanchard-research-and-training-india/" target="_blank">
                                 <i className='bx bxl-linkedin'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.youtube.com/c/BlanchardinternationalIndia" target="_blank">
                                 <i className='bx bxl-youtube'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://twitter.com/blanchard_india" target="_blank">
                                 <i className='bx bxl-twitter'></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.instagram.com/blanchard_research_india/" target="_blank">
                                 <i className='bx bxl-instagram'></i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                     <div className="footer-widget footer-widget-color1 ps-2">
                        <h3>CONNECT</h3>
                        <ul className="footer-list">
                           <li>
                              <Link href="/get-started" target="_blank">
                              Contact Us
                              </Link>
                           </li>
                           <li>
                              <Link href="/get-started" target="_blank">
                              Request a Speaker
                              </Link>
                           </li>
                           <li>
                              <Link href="/terms-and-conditions" target="_blank">
                              Terms And Conditions
                              </Link>
                           </li>
                           <li>
                              <Link href="/cancellation-and-refund-policy" target="_blank">
                              Cancellation and Refund Policy
                              </Link>
                           </li>
                           <li>
                              <Link href="/books" target="_blank">
                              Books
                              </Link>
                           </li>
                           <li>
                              <Link href="/blanchard-privacy-policy" target="_blank">
                              Privacy Policy
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="footer-widget footer-widget-color1 ps-2">
                        <h3>PRODUCTS & SERVICES</h3>
                        <ul className="footer-list">
                           <li>
                              <Link href="/products-services/slii-experience" target="_blank">
                              The SLII Experience™
                              </Link>
                           </li>
                           <li>
                              <Link href="/products-services/blanchard-management-essentials" target="_blank">
                              Blanchard Management Essentials
                              </Link>
                           </li>
                           <li>
                              <Link href="/products-services/self-leadership" target="_blank">
                              Self Leadership
                              </Link>
                           </li>
                           <li>
                              <Link href="/products-services/coaching-essentials" target="_blank">
                              Coaching Essentials
                              </Link>
                           </li>
                           <li>
                              <Link href="/products-services/building-trust" target="_blank">
                              Building Trust
                              </Link>
                           </li>
                           <li>
                              <Link href="/products-services/leading-people-through-change" target="_blank">
                              Leading People Through Change
                              </Link>
                           </li>
						   <li>
                              <Link href="/products-services/team-leadership" target="_blank">
                              Team Leadership
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="footer-widget footer-widget-color1">
                        <h3>GET IN TOUCH</h3>
                        <ul className="footer-list-two">
                           <li>
                              <i className="flaticon-placeholder"></i>
                              <div className="title">BYLD Group: <br></br>2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</div>
                           </li>
                           <li>
                              <i className="flaticon-call"></i>
                              <div className="title"></div>
                              <a href="tel:1800-102-1345"> 1800-102-1345 </a>
                           </li>
                           <li>
                              <i className="flaticon-email"></i>
                              <div className="title"></div>
                              <a href="mailto:blanchard.info@byldgroup.com"><span className="__cf_email__" data-cfemail="ff979a939390bf91968790d19c9092">blanchard.info@byldgroup.com</span></a>
                           </li>
                        </ul>
                        <form id="footerformreset" className="newsletter-form" onSubmit={registerUser}>
                           <input type="email" className="form-control" placeholder="Email Address" name="fmail" required autocomplete="off"/>
                           <button type="submit" className="submit-btn btn-bg1">
                           Subscribe
                           </button>
                           <p id="showlabel" style={{ display: "none" }}></p>
                        </form>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="copy-right-area-two">
               <div className="copy-right-text">
                  <p>
                    © 2022 Blanchardinternational India . All Rights Reserved.
                  </p>
               </div>
            </div>
         </div>
      </footer>
    )
}

export default Footer
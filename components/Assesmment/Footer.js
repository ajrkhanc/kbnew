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
        <footer className="footer-area footer-bg2 massesment pt-20">
         <div className="footer-top pb-10">
            <div className="container">
               <div className="row">
                  <div className="col-sm-3">
                     <div className="footer-widget footer-widget-color1">                       
                        <div className="social-link-content">
                           {/* <h3 className="title">Follow Us On</h3> */}
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
                 
                  <div className="col-sm-9">
                     <div className="footer-widget footer-widget-color1">
                        {/* <h3>GET IN TOUCH</h3> */}
                        <ul className="footer-list-two">
                           <li>
                              <i className="flaticon-placeholder"></i>
                              <div className="title">BYLD Group: 2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</div>
                           </li>                           
                        </ul>                  
                     </div>
                  </div>
               </div>
            </div>
         </div>
   
      </footer>
    )
}

export default Footer
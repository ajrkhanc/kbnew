import Link from "next/link";
import Head from "next/head";

export default function VirtualPublicWorkshop() {
   const registerUser = async event => {
      event.preventDefault()

      document.getElementById("submitbuttonform").value = "Submitting form...."

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         // console.log(this.responseText.status);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/blanchardinternational/wp-json/contact-form-7/v1/contact-forms/10/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            var res = JSON.parse(xhttp.responseText);
            console.log(res)
            if (res.status == "mail_sent") {
               document.getElementById("contactForm").reset();

               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                  window.location.href = "/thank-you-lp"
               }, 3000);

            } else {
               document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
               document.getElementById("showlabel").style.display = "block";

            }
         }
      };
      xhttp.send("leadsquared-FirstName=" + event.target.leadsquared_FirstName.value +
         "&leadsquared-EmailAddress=" + event.target.leadsquared_EmailAddress.value +
         "&leadsquared-Mobile=" + event.target.leadsquared_Mobile.value +
         "&leadsquared-Company=" + event.target.leadsquared_Company.value +
         "&leadsquared-JobTitle=" + event.target.leadsquared_JobTitle.value +
         "&leadsquared-mx_States=" + event.target.leadsquared_mx_States.value +
         "&leadsquared-mx_Showed_Interest_in=" + event.target.leadsquared_mx_Showed_Interest_in.value +
         "&referredby=" + event.target.referredby.value +     
         "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

   }
   return (
      <>
         <Head>
            <title>Explore Upcoming Workshops - Blanchard Research and Training</title>
            <meta name="description" content="Blanchard training programs have proven effective in transforming lives of millions of managers and organizational leaders around the world. Their programs include leadership development programs, webinars and training for the trainers. Explore their upcoming workshops in your city." />
            <link rel="icon" href="/favicon.ico" />
         </Head>


         <div className="inner-banner genericnewlp">
            <div className="container">
               <div className='row'>
                  <div className='col-sm-7'>
                     <div className="inner-title text-left newb">
                        <h3 className="font28c">UPCOMING VIRTUAL PUBLIC WORKSHOPS</h3>
                        <h4 className='nnnc'>It’s time to stop traveling, not the learning!</h4>
                        <p className="mppc">
                           Amid the COVID19, while social distancing and avoiding large gatherings has become need-of-the-hour, we bring you the power of virtual learning with our world-class leadership trainings so the learning won’t stop.
                        </p>
                     </div>
                  </div>
                  <div className='col-sm-5'>
                     <div className='contact-form genericnewlpformbg'>
                        <div className="section-title">
                           <p>Looking for quicker assistance? Fill in your details and get a call back within 24 working hours.</p>
                        </div>
                        <form id="contactForm" method="post" onSubmit={registerUser}>
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="Your Name*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Your Email*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_Mobile" id="leadsquared_Mobile" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_JobTitle" id="leadsquared_JobTitle" className="form-control" placeholder="Designation" pattern="[a-zA-Z -]*$" title="Only alphabets are allowed" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_mx_States" id="leadsquared_mx_States" className="form-control" placeholder="Location" />
                                 </div>
                              </div>

                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <select name="leadsquared_mx_Showed_Interest_in" className="form-control" required>
                                       <option value="">Pick up any Slot*</option>
                                       <option value="The SLII Experience™ - Virtual - January 23rd - 24th, 2023">The SLII Experience™ - Virtual - January 23rd - 24th, 2023</option>
                                       <option value="The SLII Experience™ T4T - January 30th - 31st, 2023">The SLII Experience™ T4T - January 30th - 31st, 2023</option>
                                       <option value="Self Leadership - Virtual - January 31st, 2023">Self Leadership - Virtual - January 31st, 2023</option>
                                       <option value="Conversational Capacity - Virtual - February 10th, 2023">Conversational Capacity - Virtual - February 10th, 2023</option>
                                       <option value="Building Trust - Virtual - February 22nd, 2023">Building Trust - Virtual - February 22nd, 2023</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <select name="referredby" className="form-control" required>
                                       <option value="">Referred By*</option>
                                       <option value="Social Media">Social Media</option>
                                       <option value="Google Search">Google Search</option>
                                       <option value="Reference">Reference</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-lg-6 d-none">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="Ken Blanchard Companies" className="form-control" />
                                 </div>
                              </div>


                              <div className="col-lg-12 col-md-12">
                                 <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Submit" />
                                 <div id="msgSubmit" className="h3 text-center hidden"></div>
                                 <div className="clearfix"></div>
                                 <p id="showlabel" style={{ display: "none" }}></p>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="what-did-area pb-40 pt-45 style2 themebg">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-12">
                     <h2 className='text-center'>Upcoming Events</h2>
                     <br></br>
                     {/* <h2 className="titleh2 text-center">It’s time to stop traveling, not the learning!</h2>
                     <p className='text-center'>Amid the COVID19, while social distancing and avoiding large gatherings has become need-of-the-hour, we bring you <br />the power of virtual learning with our world-class leadership trainings so the learning won’t stop.</p>
                     <p className='text-center pb-25'>Take advantage of our virtual trainings.</p> */}
                     <div className="what-did-left-content">
                        <div className="row row-eq-height eventsandworkshopbox">

                           <div className="col-sm-4">
                              <div className="choose-card">
                                 <img src="/assets/img/workshopformain1.jpg" alt="Images" />
                                 <h3 className="mbb-0">The SLII Experience™ - Virtual</h3>
                                 <p>January 23rd - 24th, 2023</p>
                                 <h3 className="ptt10 mbb-0">The SLII Experience™ T4T</h3>
                                 <p>January 30th - 31st, 2023</p>
                                 <div className='row eventsbottomarea2 text-center'>
                                    <div className='col-sm-12'>
                                       <a href="/events-workshops/virtual-public-workshop#REQUEST" className="default-btn-two">REQUEST INFO<i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-sm-4">
                              <div className="choose-card">
                                 <img src="/assets/img/workshopformain1.jpg" alt="Images" />
                                 <h3>Self Leadership - Virtual</h3>
                                 <p>January 31st, 2023</p>
                                 <div className='row eventsbottomarea2 text-center'>
                                    <div className='col-sm-12'>
                                       <a href="/events-workshops/virtual-public-workshop#REQUEST" className="default-btn-two">REQUEST INFO<i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="col-sm-4">
                     <div className="choose-card">
                        <img src="/assets/img/workshopformain1.jpg" alt="Images"/>
                        <h3>Conversational Capacity - Virtual</h3>
                        <p>February 10th, 2023</p>
                        <div className='row eventsbottomarea2 text-center'>
                           <div className='col-sm-12'>
                              <a href="/events-workshops/virtual-public-workshop#REQUEST" className="default-btn-two">REQUEST INFO<i className="bx bx-right-arrow-alt"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-4">
                     <div className="choose-card">
                        <img src="/assets/img/workshopformain1.jpg" alt="Images"/>
                        <h3>Building Trust - Virtual</h3>
                        <p>February 22nd, 2023</p>
                        <div className='row eventsbottomarea2 text-center'>
                           <div className='col-sm-12'>
                              <a href="/events-workshops/virtual-public-workshop#REQUEST" className="default-btn-two">REQUEST INFO<i className="bx bx-right-arrow-alt"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>


                        </div>
                     </div>
                     <div className='text-center'>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div id="REQUEST" className="contact-area pt-45 pb-25">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className='text-center pb-25'>
                        <h3 className='titleh2'>KINDLY FILL YOUR DETAILS OUR SUBJECT MATTER EXPERTS WILL <br />CONNECT YOU WITHIN 24 WORKING HOURS.</h3>
                     </div>
                     <div className="contact-form">
                        <form id="contactForm" method="post" onSubmit={registerUser}>
                           <div className="row">
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_FirstName" id="leadsquared_FirstName" className="form-control" placeholder="Your Name*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Your Email*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_Mobile" id="leadsquared_Mobile" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_JobTitle" id="leadsquared_JobTitle" className="form-control" placeholder="Designation" pattern="[a-zA-Z -]*$" title="Only alphabets are allowed" required />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_mx_States" id="leadsquared_mx_States" className="form-control" placeholder="Location" />
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <label>Pick up any Slot*</label>
                                    <select name="leadsquared_mx_Showed_Interest_in" className="form-control" required>
                                       <option value="">---</option>
                                       <option value="The SLII Experience™ - Virtual - January 23rd - 24th, 2023">The SLII Experience™ - Virtual - January 23rd - 24th, 2023</option>
                                       <option value="The SLII Experience™ T4T - January 30th - 31st, 2023">The SLII Experience™ T4T - January 30th - 31st, 2023</option>
                                       <option value="Self Leadership - Virtual - January 31st, 2023">Self Leadership - Virtual - January 31st, 2023</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-lg-6">
                                 <div className="form-group">
                                    <label>Referred By*</label>
                                    <select name="referredby" className="form-control" required>
                                       <option value="">---</option>
                                       <option value="Social Media">Social Media</option>
                                       <option value="Google Search">Google Search</option>
                                       <option value="Reference">Reference</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-lg-6 d-none">
                                 <div className="form-group">
                                    <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="Ken Blanchard Companies" className="form-control" />
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                 <div className="form-group pt-20">
                                    <textarea name="leadsquared_Notes" className="form-control" id="leadsquared_Notes" cols="30" rows="3" placeholder="Your Message"></textarea>
                                 </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                 <input id="submitbuttonform" className="default-btn btn-bg1 disabled" type="submit" value="Send Message" />
                                 <div id="msgSubmit" className="h3 text-center hidden"></div>
                                 <div className="clearfix"></div>
                                 <p id="showlabel" style={{ display: "none" }}></p>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

         </div> */}

      </>
   )
}
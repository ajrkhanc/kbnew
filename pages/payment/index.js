
import Head from 'next/head'
import React from "react";


export default function Home() {


    const makePayment = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const amountc = event.target.amount.value;
        const amount = amountc;

        console.log("here...");
        const res = await initializeRazorpay();
        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", {
            method: "POST",
            headers: {
 
                // Authorization: 'YOUR_AUTH_HERE'
            },

        }).then((t) =>
            t.json()
        );
        console.log(data);
        var options = {
            key: 'rzp_test_n1QZXDjqHkx1mZ', // Enter the Key ID generated from the Dashboard
            name: "Ajrkhan",
            currency: data.currency,
            amount: (amount * 100),
            order_id: data.id,
            description: "Thankyou for your test",
            image: "https://byldgroup.com/assets/img/byld-logo.svg",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: name,
                email: email,
                contact: phone,
                },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };


    return (
        <>

            <section className='assesmentpart2'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12'>
                            <div className='dfdfdf'>
                                <form className='mlicss' onSubmit={makePayment}>

                                    <div className='row inpuut'>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Your Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="number" name="amount" pattern="[0-9]*" placeholder="Amount*" required />
                                        </div>



                                        <div className='col-sm-12 text-center'>
                                            <input type="submit" id='submitbuttonform' value="Submit" tabindex="22" class="assesmetmain" />
                                            <p class="feedbackcolor" id="response"></p>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

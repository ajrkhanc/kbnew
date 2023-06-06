const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {

  const { title } = req.body;
  const { payment, message } = req.body;

  console.log(payment);


  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: 'rzp_test_Jx7KqSnuFkc8pi',
      key_secret: 'k8stbhTtZY5PnoxhFIADyBC0',
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amountc = payment;
    const currency = "INR";
    const options = {
      amount: (amountc * 100),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}

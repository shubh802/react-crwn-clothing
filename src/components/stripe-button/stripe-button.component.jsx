import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert('Payment Successful ');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_FoVmWS4Birz0ABwpqIaeJ1WL00xlRaoqZy";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Yourtotal is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

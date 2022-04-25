import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import AddressForm from './AddressForm';
import Checkout from './Checkout';
import PaymentForm from './PaymentForm';
import reportWebVitals from './reportWebVitals';
import Review from './Review';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Checkout />
//     <PaymentForm />
//     <AddressForm />
//     <Review />

//   </React.StrictMode>
// );

ReactDOM.render(
  <React.Fragment>
    <Checkout />
  </React.Fragment>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

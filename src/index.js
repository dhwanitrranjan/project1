import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import ProductPage from './Components/ProductPage';
import ProdDetail from './Components/ProdDetail';
import { BrowserRouter,  Routes, Route, } from "react-router-dom";
import { Provider } from 'react-redux';
import configStore from './Components/reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/add-data" element={<ProductPage />} />
          <Route path="/product" element={<ProdDetail />} />
          {/* <Route path="/add-data/product-details" element={<ProdDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

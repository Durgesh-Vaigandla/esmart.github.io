import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import NotificationSettings from "./pages/Notification";
import CustomerVoices from "./pages/Contact";
import Review from "./pages/Review";
import "react-toastify/dist/ReactToastify.css";
import PForm from "./components/PForm";
import AddProductForm from "./pages/AddProductForm.js";
import QRCodeVerification from "./pages/QR";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user/add-products" element={<PForm></PForm>}></Route>
        <Route
          path="/scanqr"
          element={<QRCodeVerification></QRCodeVerification>}
        ></Route>
        <Route path="/user/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/user/login" element={<Login></Login>}></Route>
        <Route
          path="/user/add-product"
          element={<AddProductForm></AddProductForm>}
        ></Route>
        <Route
          path="/contact"
          element={<CustomerVoices></CustomerVoices>}
        ></Route>
        <Route
          path="/user/notifications"
          element={<NotificationSettings></NotificationSettings>}
        ></Route>
        {/* <Route path="/#about" element={<Home></Home>}></Route> */}
        <Route path="/user/review" element={<Review></Review>}></Route>
      </Routes>
    </>
  );
};

export default App;

import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProductDetails'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { IoCloseSharp } from "react-icons/io5";
import ProductZoom from './components/ProductZoom';
import ProductDetailsComponent from './components/ProductDetailsComponent';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CartPanel from './components/CartPanel';
import CartPage from './Pages/Cart';
import Verify from './Pages/Verify';

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/ForgotPassword';
import Checkout from './Pages/Checkout';
import MyAccount from './Pages/MyAccount';
import MyList from './Pages/MyList';


const MyContext = createContext()

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleClickOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(true);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const openAlertBox = (status, msg) => {
    if(status === "success") {
      toast.success(msg)
    }
    if(status === "error") {
      toast.error(msg)    
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const values = {
    setOpenProductDetailsModal,
    openCartPanel,
    toggleCartPanel,
    openAlertBox,
    isLoggedIn,
    setIsLoggedIn
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route path={"/productListing"} exact={true} element={<ProductListing />} />
            <Route path={"/product/:id"} exact={true} element={<ProductDetails />} />
            <Route path={"/login"} exact={true} element={<Login />}/>
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />}/>
            <Route path={"/verify"} exact={true} element={<Verify />}/>
            <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />} />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/my-account"} exact={true} element={<MyAccount />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
          </Routes>
          <Footer />
          <CartPanel />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black 
            !absolute top-[15px] right-[15px] !bg-[#f1f1f1]' onClick={handleCloseProductDetailsModal}
            ><IoCloseSharp className='text-[20px]'/></Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App

export {MyContext}

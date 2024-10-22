"use client";
import React, { useState } from 'react';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const CarWashServices = () => {
  const [showBasicWashPopup, setShowBasicWashPopup] = useState(false);
  const [showStandardWashPopup, setShowStandardWashPopup] = useState(false);
  const [showComprehensiveWashPopup, setShowComprehensiveWashPopup] = useState(false);
  const [basicWashLocation, setBasicWashLocation] = useState('');
  const [basicWashMobileNumber, setBasicWashMobileNumber] = useState('');
  const [standardWashLocation, setStandardWashLocation] = useState('');
  const [standardWashMobileNumber, setStandardWashMobileNumber] = useState('');
  const [comprehensiveWashLocation, setComprehensiveWashLocation] = useState('');
  const [comprehensiveWashMobileNumber, setComprehensiveWashMobileNumber] = useState('');

  const handleToggleBasicWashPopup = () => {
    setShowBasicWashPopup(!showBasicWashPopup);
  };

  const handleToggleStandardWashPopup = () => {
    setShowStandardWashPopup(!showStandardWashPopup);
  };

  const handleToggleComprehensiveWashPopup = () => {
    setShowComprehensiveWashPopup(!showComprehensiveWashPopup);
  };

  const handleBasicWashLocationChange = (e) => {
    setBasicWashLocation(e.target.value);
  };

  const handleBasicWashMobileNumberChange = (e) => {
    setBasicWashMobileNumber(e.target.value);
  };

  const handleStandardWashLocationChange = (e) => {
    setStandardWashLocation(e.target.value);
  };

  const handleStandardWashMobileNumberChange = (e) => {
    setStandardWashMobileNumber(e.target.value);
  };

  const handleComprehensiveWashLocationChange = (e) => {
    setComprehensiveWashLocation(e.target.value);
  };

  const handleComprehensiveWashMobileNumberChange = (e) => {
    setComprehensiveWashMobileNumber(e.target.value);
  };

  return (
    <>
      <Navbar />

      <section className="relative mt-20">
        <div className="container-fluid md:mx-4 mx-2">
          <div style={{ backgroundImage: `url('/images/popup/wash1.jfif')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh' }} className="relative pt-20 pb-40 table w-full rounded-xl shadow-md overflow-hidden bg-no-repeat" id="home">
            <div className="container mx-auto pt-20 pb-12">
              <h1 className="text-8xl font-semibold mb-8 text-center text-slate-200">Electrify Wash</h1>
              <div className="grid grid-cols-1 text-center mt-10">
                <h3 className="md:text-6xl text-3xl md:leading-normal leading-normal font-medium text-slate-200">Wash Packages</h3>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Basic Wash</h4>
                    <p className="text-gray-600">Basic cleaning service</p>
                    <p className="text-green-600 font-semibold">$10</p>
                    <button onClick={handleToggleBasicWashPopup} className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                      i
                    </button>
                    {showBasicWashPopup && (
                      <div className="absolute top-0 left-0 p-4 bg-white border rounded shadow-md">
                        <form onSubmit={handleToggleBasicWashPopup}>
                          <label htmlFor="basicWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="basicWashLocation" name="basicWashLocation" value={basicWashLocation} onChange={handleBasicWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <label htmlFor="basicWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                          <input type="text" id="basicWashMobileNumber" name="basicWashMobileNumber" value={basicWashMobileNumber} onChange={handleBasicWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>

                {/* Similar structure for Standard Wash */}
                <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Standard Wash</h4>
                    <p className="text-gray-600">Standard cleaning service</p>
                    <p className="text-green-600 font-semibold">$20</p>
                    <button onClick={handleToggleStandardWashPopup} className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                      i
                    </button>
                    {showStandardWashPopup && (
                      <div className="absolute top-0 left-0 p-4 bg-white border rounded shadow-md">
                        <form onSubmit={handleToggleStandardWashPopup}>
                          <label htmlFor="standardWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="standardWashLocation" name="standardWashLocation" value={standardWashLocation} onChange={handleStandardWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <label htmlFor="standardWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                          <input type="text" id="standardWashMobileNumber" name="standardWashMobileNumber" value={standardWashMobileNumber} onChange={handleStandardWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>

                {/* Similar structure for Comprehensive Wash */}
                <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Comprehensive Wash</h4>
                    <p className="text-gray-600">Comprehensive cleaning service</p>
                    <p className="text-green-600 font-semibold">$30</p>
                    <button onClick={handleToggleComprehensiveWashPopup} className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                      i
                    </button>
                    {showComprehensiveWashPopup && (
                      <div className="absolute top-0 left-0 p-4 bg-white border rounded shadow-md">
                        <form onSubmit={handleToggleComprehensiveWashPopup}>
                          <label htmlFor="comprehensiveWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="comprehensiveWashLocation" name="comprehensiveWashLocation" value={comprehensiveWashLocation} onChange={handleComprehensiveWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <label htmlFor="comprehensiveWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                          <input type="text" id="comprehensiveWashMobileNumber" name="comprehensiveWashMobileNumber" value={comprehensiveWashMobileNumber} onChange={handleComprehensiveWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}

export default CarWashServices;

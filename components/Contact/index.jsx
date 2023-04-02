"use client";

import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";
//const { GoogleSpreadsheet } = require('google-spreadsheet');

const Contact = () => {
  {/*
  const [formData, setFormData] = useState({})

  const {
    REACT_APP_PRIVATE_KEY,
    REACT_APP_CLIENT_EMAIL,
    REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID
  } = process.env

  const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
      });
      await doc.loadInfo();
      console.log(doc.loadInfo());
      const sheet = doc.sheetsById[REACT_APP_SHEET_ID];
      const result = await sheet.addRow(row);
      return result;
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const handleInputChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
    console.log("Submit")
    event.preventDefault()
    console.log(formData);
  }
  */}
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full mt-10">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Want to join us? Let us know!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our management team will get back to you as soon as possible.
              </p>

              <p className="mb-12 text-base font-medium text-body-color">
                Click <a className="underline font-bold" href="https://docs.google.com/forms/d/e/1FAIpQLSekPKWVWd0ETOPqWg6l8SRVBTs8F-GKwjl6dl2mW_XIZU-piQ/viewform">here</a> to fill the form.
              </p>
              {/* <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="artistname"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Artist Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Artist Name"
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Phone
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="demo"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Demo
                      </label>
                      <input
                        type="text"
                        placeholder="Provide any demo made by yourself"
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button onPress={handleSubmit} type="submit" className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

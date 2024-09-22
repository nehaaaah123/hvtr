import React from 'react'
import {Link} from 'react-router-dom'
import a3 from "../a3.png"

export default function About() {
    return (
        <div className="py-16 bg-black">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={a3}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-400 font-bold md:text-4xl">
                            HVTRON Technology
                        </h2>
                        <p className="mt-6 text-gray-200">
                        Hvtron Technologies - Manufacturer of electrical equipments & other products since 2021 in Gurugram, Haryana.</p>
                        <p className='mt-9 text-gray-200 text-lg'>
 <ul>Nature of Business is Manufacturer
                        </ul>
  <ul>Total Number of Employees : Upto 10-20  People
  </ul>
  <ul>Year of Establishment : 2021
  </ul>
  <ul>Legal Status of Firm is Individual - Proprietor
  </ul>
  <ul>Annual Turnover is Upto Rs. 50 Lakh
</ul><ul>GST Number 06BWDPJ6649C1ZM
                        </ul>
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
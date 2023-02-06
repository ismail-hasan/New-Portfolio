import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import "./Student.css"

const Student = () => {
    return (
        <div>
            <div className='flex justify-between mt-4 text-white'>
                <h1 className='text-[22px] capitalize'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-7 overflow-y-scroll h-96'>
                <div>
                    <FaFacebook className='text-[40px] text-white'></FaFacebook>

                </div>

            </div>

        </div>
    );
};

export default Student;
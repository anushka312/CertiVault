import React from 'react';
import Academic from '../../assets/diploma.svg';
import Finance from '../../assets/tax-consultant.svg';
import Administrative from '../../assets/public-administration.svg';
import Miscellanious from '../../assets/curiosity.svg';

const CategoryPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-sky-100">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl w-full relative">
                <h1 className="text-2xl font-bold mb-8 text-center">Find Documents based on Categories</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 hover:shadow-md">
                        <img src={Academic} alt="" className="w-16 h-16 mb-4" />
                        <p className="text-gray-700 font-medium">Academic Records</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 hover:shadow-md">
                        <img src={Finance} alt="" className="w-16 h-16 mb-4" />
                        <p className="text-gray-700 font-medium">Financial Records</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 hover:shadow-md">
                        <img src={Administrative} alt="" className="w-16 h-16 mb-4" />
                        <p className="text-gray-700 font-medium">Administrative</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 hover:shadow-md">
                        <img src={Miscellanious} alt="" className="w-16 h-16 mb-4" />
                        <p className="text-gray-700 font-medium">Miscellaneous</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-b-lg"></div>
            </div>
        </div>
    );
};

export default CategoryPage;

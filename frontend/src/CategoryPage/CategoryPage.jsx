import React from 'react';
import './CategoryPage.css'; // For styling
import Academic from '../assets/diploma.svg';
import Finance from '../assets/tax-consultant.svg';
import Administrative from '../assets/public-administration.svg';
import Miscellanious from '../assets/curiosity.svg';

const CategoryPage = () => {
    return (
        <div className="category-page-wrapper">
            <div className="category-box">
                <h1 className="category-heading">Find Documents based on Categories</h1>
                <div className="category-grid">
                    <div className="category-item">
                        <img src={Academic} alt="" className="category-icon"/>
                        <p>Academic Records</p>
                    </div>
                    <div className="category-item">
                        <img src={Finance} alt="" className="category-icon" />
                        <p>Financial Records</p>
                    </div>
                    <div className="category-item">
                        <img src={Administrative} alt="" className="category-icon"/>
                        <p>Administrative</p>
                    </div>
                    <div className="category-item">
                        <img src={Miscellanious} alt="" className="category-icon"/>
                        <p>Miscellaneous</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;

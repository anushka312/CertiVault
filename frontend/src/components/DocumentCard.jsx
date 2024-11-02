import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const DocumentCard = ({title, image, id}) => {
    // const navigate = useNavigate()
    return (
        <Link to={(`/doc/${id}`)}>
            <div 
                className="flex flex-col items-center p-4 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 hover:shadow-md">
                <img src={image} alt="Document Image" className="w-16 h-16 mb-4" />
            <p className="text-gray-700 font-medium">{title}</p>
            </div>
        </Link>
        
    )
}

export default DocumentCard
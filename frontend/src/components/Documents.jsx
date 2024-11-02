import React, { useEffect, useState } from 'react';
import Academic from '../assets/diploma.svg';
import Finance from '../assets/tax-consultant.svg';
import Administrative from '../assets/public-administration.svg';
import Miscellanious from '../assets/curiosity.svg';
import DocumentCard from './DocumentCard.jsx';
import axios from 'axios'


const Documents = () => {

    const [data, setData] = useState(false)

    const getDocumentData = async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/api/v1/user/view-doc')
            console.log(data);
            
            if(data.success){
                setData(data.data)
                console.log(data.data);
                
            }
        } catch (error) {
            console.log("Error While Fetching documents: ", error);
        }
    } 

    useEffect(() => {
        getDocumentData()        
    }, [])


    if(data === false){
        return <div className='flex justify-center items-center text-5xl text-white'>
            Loading
        </div>
    }


    return (
        <div className="flex h-screen w-full bg-sky-100">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full relative">
                <h1 className="text-2xl font-bold mb-8 text-center">Find Documents based on Categories</h1>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    {
                        data.map( (document) => (
                            <DocumentCard image={document.image} title={document.title} id={document._id}/>
                        ) )
                    }
                    
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-b-lg"></div>
            </div>
        </div>
    );
};

export default Documents;

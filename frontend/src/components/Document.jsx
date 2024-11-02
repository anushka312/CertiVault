import React, { useEffect, useState } from 'react';
import Academic from '../assets/diploma.svg';
import Finance from '../assets/tax-consultant.svg';
import Administrative from '../assets/public-administration.svg';
import Miscellanious from '../assets/curiosity.svg';
import DocumentCard from './DocumentCard.jsx';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Document = () => {
    const { docId } = useParams()
    console.log(docId);
    
    const [data, setData] = useState(false)

    const getDocumentData = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/api/v1/user/get-doc', {params: {documentid: docId}} )
            // const { data } = await axios.get(`http://localhost:3000/api/v1/user/get-doc?documentid=${docId}`)
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
    }, [docId])


    if(data === false || data === null){
        return <div className='flex justify-center items-center text-5xl text-white'>
            Loading...
        </div>
    }

    return (
        <div className="flex h-screen w-full bg-sky-100">
            <div className="rounded-lg shadow-lg w-full relative bg-slate-200">
                <div className="flex justify-start items-center gap-8 m-8">
                    <img src={data.image} alt="Document Image" className="w-h-64 h-64 m-8 bg-slate-900" />
                    <div className='flex flex-col gap-2'>
                        <h1 className="text-3xl font-bold">{data.title}</h1>
                        <p className="text-gray-900 font-semibold text-xl">{data.description}</p>
                    </div>
                </div>
                <div className='px-16'>
                    <h1 className="text-3xl font-bold mb-4">Conditions</h1>
                    <ul >
                        {
                            data.conditions.map( (item, idx) => (
                                <li key={idx} className='text-gray-900 text-lg font-bold py-2'>{"- "}{item}</li>
                            ) )
                        }
                    </ul>
                    <button className='my-10 bg-blue-700 text-white text-xl p-2 rounded-lg'>Request Document</button>
                </div>
                
            </div>
        </div>
    );
};

export default Document;

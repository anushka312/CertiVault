import React from 'react'
import DocumentCarousel from './DocumentCarousel.jsx'

const Home = () => {
  return (
    <div className="flex flex-col">
        <h1 className="text-2xl text-violet-700 p-10 pb-3">Welcome, Aditya Kumar Jha!</h1>
        <p className="text-lg text-black pl-10 pb-5 pr-14">Welcome to CertiVault, your trusted platform for securely issuing, storing, and managing official documents. CertiVault allows you to store, verify, and access important documents like certificates, transcripts, and diplomas all in one place. Issued directly by institutions, your credentials remain authentic and tamper-proof.</p>
        <p className="text-lg text-black pl-10 pb-5">Sign up today to safeguard your future, or sign in to access your documents instantly, anytime, anywhere.</p>
        <p className="text-2xl text-violet-700 pl-10">Documents</p>
        <DocumentCarousel />
    </div>
  )
}

export default Home
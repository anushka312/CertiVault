import React, { useState } from 'react';

const FetchDocuments = () => {
    const [studentId, setStudentId] = useState('');
    const [docType, setDocType] = useState('');
    const [note, setNote] = useState('');
    const [requests, setRequests] = useState([]);
    const [statusTab, setStatusTab] = useState('pending'); // Controls which tab is active

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating a request submission
        const newRequest = { id: Date.now(), studentId, docType, note, status: 'pending' };
        setRequests([...requests, newRequest]);
        setStudentId('');
        setDocType('');
        setNote('');
    };

    const handleTabSwitch = (tab) => {
        setStatusTab(tab);
    };

    const renderRequests = (status) => {
        return requests
            .filter((req) => req.status === status)
            .map((req) => (
                <div key={req.id} className="bg-white shadow-md p-4 rounded-lg mb-2">
                    <p><strong>Student ID:</strong> {req.studentId}</p>
                    <p><strong>Document Type:</strong> {req.docType}</p>
                    <p><strong>Note:</strong> {req.note}</p>
                </div>
            ));
    };

    return (
        <div className="flex flex-col items-center bg-sky-100 min-h-screen p-6">
            <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-lg mb-8">
                <h1 className="text-2xl font-bold text-violet-700 mb-6">Request a Document</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Student ID:</label>
                        <input
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Document Type:</label>
                        <input
                            type="text"
                            value={docType}
                            onChange={(e) => setDocType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Note:</label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            rows="3"
                        />
                    </div>
                    <button type="submit" className="w-full bg-violet-700 text-white p-2 rounded-lg hover:bg-violet-600">
                        Submit Request
                    </button>
                </form>
            </div>

            <div className="bg-white shadow-md rounded-lg w-full max-w-lg">
                <div className="flex justify-around border-b border-gray-300">
                    <button
                        className={`w-1/2 p-3 ${statusTab === 'pending' ? 'bg-blue-100' : 'bg-white'}`}
                        onClick={() => handleTabSwitch('pending')}
                    >
                        Pending Requests
                    </button>
                    <button
                        className={`w-1/2 p-3 ${statusTab === 'completed' ? 'bg-blue-100' : 'bg-white'}`}
                        onClick={() => handleTabSwitch('completed')}
                    >
                        Completed Requests
                    </button>
                </div>
                <div className="p-4">
                    {statusTab === 'pending' ? (
                        renderRequests('pending').length > 0 ? (
                            renderRequests('pending')
                        ) : (
                            <p className="text-gray-500">No pending requests.</p>
                        )
                    ) : (
                        renderRequests('completed').length > 0 ? (
                            renderRequests('completed')
                        ) : (
                            <p className="text-gray-500">No completed requests.</p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default FetchDocuments;

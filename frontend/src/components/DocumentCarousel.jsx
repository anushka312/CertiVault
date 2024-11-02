import React from 'react';

const documents = [
  { title: 'Semester 1 Marsheet', issuer: 'Delhi Technological University' },
  { title: 'Fee Structure', issuer: 'Delhi Technological University' },
  { title: 'Bonafide', issuer: 'Delhi Technological University' },
  { title: 'Semester 2 Marksheet', issuer: 'Delhi Technological University' },

  // Add more documents as needed
];

const DocumentCarousel = () => {
  return (
    <div className="flex flex-col space-y-4 px-4 py-6"> {/* Outer container */}
      <div className="relative w-full max-w-full overflow-hidden"> {/* Prevent page scrolling */}
        <div className="flex overflow-x-auto space-x-4 max-w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pl-10">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="min-w-[200px] p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="text-lg font-semibold">{doc.title}</div>
              <div className="text-sm text-gray-500">{doc.issuer}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-right">
        <button className="text-blue-500 hover:underline">VIEW ALL</button>
      </div>
    </div>
  );
};

export default DocumentCarousel;

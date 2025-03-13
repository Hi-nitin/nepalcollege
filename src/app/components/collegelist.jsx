'use client';

import { useState } from 'react';
import Image from 'next/image';
import { colleges } from './data/colleges';

const CollegeList = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedOwnership, setSelectedOwnership] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const collegesPerPage = 8;

  const filterColleges = () => {
    return colleges
      .filter((college) =>
        selectedCity ? college.Address.toLowerCase().includes(selectedCity.toLowerCase()) : true
      )
      .filter((college) =>
        selectedUniversity ? college.University.toLowerCase().includes(selectedUniversity.toLowerCase()) : true
      )
      .filter((college) =>
        selectedCourse ? college.Programs.some((program) => program.toLowerCase().includes(selectedCourse.toLowerCase())) : true
      )
      .filter((college) =>
        selectedOwnership ? college.Ownership.toLowerCase().includes(selectedOwnership.toLowerCase()) : true
      )
      .filter((college) =>
        searchQuery ? college.Name.toLowerCase().includes(searchQuery.toLowerCase()) : true
      );
  };

  // Pagination Logic
  const filteredColleges = filterColleges();
  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const currentColleges = filteredColleges.slice(indexOfFirstCollege, indexOfLastCollege);

  return (
    <div className="container mx-auto p-4">
   
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block font-semibold">Filter by City</label>
          <select onChange={(e) => setSelectedCity(e.target.value)} className="w-full p-2 border rounded">
            <option value="">All Cities</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Chitwan">Chitwan</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Filter by University</label>
          <select onChange={(e) => setSelectedUniversity(e.target.value)} className="w-full p-2 border rounded">
            <option value="">All Universities</option>
            <option value="Tribhuvan University">Tribhuvan University</option>
            <option value="Lincoln University College">Lincoln University College</option>
            <option value="Pokhara University">Pokhara University</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Filter by Course</label>
          <select onChange={(e) => setSelectedCourse(e.target.value)} className="w-full p-2 border rounded">
            <option value="">All Courses</option>
            <option value="BBA">BBA</option>
            <option value="BBS">BBS</option>
            <option value="MBA">MBA</option>
            <option value="BIT">BIT</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Filter by Ownership</label>
          <select onChange={(e) => setSelectedOwnership(e.target.value)} className="w-full p-2 border rounded">
            <option value="">All Institutions</option>
            <option value="Private Institution">Private Institution</option>
            <option value="Public Institution">Public Institution</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Search College</label>
          <input type="text" placeholder="Search by college name" className="w-full p-2 border rounded" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
      </div>

      {/* College List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentColleges.length > 0 ? (
          currentColleges.map((college, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4 transition transform hover:scale-105 w-[90%] sm:w-full mx-auto">
              <Image src={college.Logo} alt={college.Name} width={300} height={200} className="mx-auto rounded-md" />
              <div className="mt-3">
                <h2 className="text-lg font-semibold text-gray-800">{college.Name}</h2>
                <p className="text-gray-600 text-sm">{college.University}</p>
                <p className="text-gray-700 text-sm">{college.Address}</p>
                <p className="text-gray-600 text-sm"><strong>Ownership:</strong> {college.Ownership}</p>
              {/* <a href={college.Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:text-blue-700">Learn More</a>
              */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No colleges found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-md text-sm font-semibold ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          >
            Prev
          </button>

          <span className="text-sm font-semibold text-gray-700">
            {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-md text-sm font-semibold ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CollegeList;

import { useState } from "react";
import { FaFileDownload, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const AgroBulletins = () => {
  const dekadDocuments = [
    { title: "May Dekad Bulletin 3", url: "/public/May Dekad3_22.pdf" },
    { title: "Dekad Bulletin 2", url: "/documents/dekad2.pdf" },
    { title: "Dekad Bulletin 3", url: "/documents/dekad3.pdf" },
    { title: "Dekad Bulletin 4", url: "/documents/dekad4.pdf" },
    { title: "Dekad Bulletin 5", url: "/documents/dekad5.pdf" },
    { title: "Dekad Bulletin 6", url: "/documents/dekad6.pdf" },
    { title: "Dekad Bulletin 7", url: "/documents/dekad7.pdf" },
    { title: "Dekad Bulletin 8", url: "/documents/dekad8.pdf" },
    { title: "Dekad Bulletin 9", url: "/documents/dekad9.pdf" },
    { title: "Dekad Bulletin 10", url: "/documents/dekad10.pdf" },
    { title: "Dekad Bulletin 11", url: "/documents/dekad11.pdf" },
    { title: "Dekad Bulletin 12", url: "/documents/dekad12.pdf" },
    { title: "Dekad Bulletin 13", url: "/documents/dekad13.pdf" },
    { title: "Dekad Bulletin 14", url: "/documents/dekad14.pdf" },
    { title: "Dekad Bulletin 15", url: "/documents/dekad15.pdf" },
  ];

  const currentDekadSummary =
    "This dekad focuses on optimal planting times, expected weather conditions, and pest management strategies to enhance crop yields.";

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredDocuments = dekadDocuments.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();
  const indexOfLastDocument = currentPage * itemsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(
    indexOfFirstDocument,
    indexOfLastDocument
  );

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Back Button */}
        <button
          onClick={() => navigate("/market-page")}
          className="text-teal-500 hover:text-teal-600 flex items-center gap-2 transition-colors mb-6"
        >
          <span>←</span>
          <span className="text-sm font-medium">GO BACK</span>
        </button>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-12 h-full">
          <h1 className="text-blue-900 text-3xl md:text-4xl font-bold mb-4 text-center">
            Agro Bulletins
          </h1>

          <h2 className="text-blue-900 text-xl md:text-2xl font-semibold mb-2 text-center">
            Current Dekad Bulletin Summary
          </h2>
          <p className="text-md text-gray-700 text-center mb-6">
            {currentDekadSummary}
          </p>

          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-md">
              <FaSearch className="absolute left-3 top-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search bulletins..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <h3 className="text-lg text-gray-800 font-semibold mb-4 text-center">
            Previous Dekadal Bulletins
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {currentDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800 font-semibold">
                    {doc.title}
                  </span>
                  <a
                    href={doc.url}
                    download
                    className="text-blue-900 hover:text-blue-800"
                  >
                    <FaFileDownload className="text-lg" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">
                  Click to download the bulletin.
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`mx-2 px-2 py-2 rounded-lg text-white ${
                currentPage === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <span className="mx-2 text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`mx-2 px-4 py-2 rounded-lg text-white ${
                currentPage === totalPages
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroBulletins;

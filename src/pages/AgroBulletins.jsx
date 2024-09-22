import { useState } from "react";
import { FaFileDownload, FaSearch } from "react-icons/fa";

const AgroBulletins = () => {
  const dekadDocuments = [
    { title: "Dekad Bulletin 1", url: "/documents/dekad1.pdf" },
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
  const itemsPerPage = 5; // Increase items per page for 15 documents

  const filteredDocuments = dekadDocuments.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDocument = currentPage * itemsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(
    indexOfFirstDocument,
    indexOfLastDocument
  );

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 h-full">
        <h1 className="text-blue-800 text-4xl font-bold mb-4 text-center">
          Agro Bulletins
        </h1>

        <h2 className="text-blue-600 text-2xl font-semibold mb-2 text-center">
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
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <h3 className="text-lg text-gray-800 font-semibold mb-4 text-center">
          Previous Dekad Bulletins
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
          {currentDocuments.map((doc, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-800 font-semibold">{doc.title}</span>
                <a
                  href={doc.url}
                  download
                  className="text-blue-600 hover:text-blue-800"
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

        <div className="flex justify-center mt-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`mx-2 px-4 py-2 rounded-lg text-white ${
              currentPage === 1
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          <span className="mx-1 text-gray-700">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`mx-2 px-4 py-2 rounded-lg text-white ${
              currentPage === totalPages
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgroBulletins;

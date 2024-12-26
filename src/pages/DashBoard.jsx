import React, { useState } from "react";
import Header from "../components/DashBoard/Header";
import RepoCard from "../components/DashBoard/RepoCard";
import SideBar from "../components/DashBoard/SideBar";

const DashBoard = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to handle search term
  const [toastMessage, setToastMessage] = useState(""); // State to manage toast visibility
  const repositories = [
    { title: "design-system", type: "Public", language: "React", size: "7320 KB", updated: "Updated 1 day ago" },
    { title: "codeant-ci-app", type: "Private", language: "JavaScript", size: "5871 KB", updated: "Updated 2 days ago" },
    { title: "analytics-dashboard", type: "Private", language: "Python", size: "4521 KB", updated: "Updated 5 days ago" },
    { title: "mobile-app", type: "Public", language: "Swift", size: "3096 KB", updated: "Updated 3 days ago" },
    { title: "e-commerce-platform", type: "Private", language: "Java", size: "6210 KB", updated: "Updated 6 days ago" },
    { title: "blog-website", type: "Public", language: "HTML/CSS", size: "1876 KB", updated: "Updated 4 days ago" },
    { title: "social-network", type: "Private", language: "PHP", size: "5432 KB", updated: "Updated 7 days ago" },
    { title: "project-management", type: "Public", language: "Vue.js", size: "5012 KB", updated: "Updated 2 days ago" },
    { title: "portfolio-site", type: "Public", language: "JavaScript", size: "2193 KB", updated: "Updated 1 day ago" },
    { title: "data-visualization", type: "Private", language: "D3.js", size: "3704 KB", updated: "Updated 4 days ago" },
    { title: "learning-platform", type: "Public", language: "Python", size: "8754 KB", updated: "Updated 6 days ago" },
    { title: "online-store", type: "Private", language: "Ruby", size: "6402 KB", updated: "Updated 3 days ago" },
    { title: "admin-dashboard", type: "Private", language: "Angular", size: "7115 KB", updated: "Updated 2 days ago" },
    { title: "social-media", type: "Public", language: "Node.js", size: "3983 KB", updated: "Updated 5 days ago" },
    { title: "job-portal", type: "Private", language: "C#", size: "4021 KB", updated: "Updated 3 days ago" },
    { title: "hotel-booking", type: "Public", language: "PHP", size: "5561 KB", updated: "Updated 1 day ago" },
    { title: "fitness-app", type: "Private", language: "Swift", size: "2921 KB", updated: "Updated 4 days ago" },
    { title: "chat-application", type: "Private", language: "JavaScript", size: "7889 KB", updated: "Updated 2 days ago" },
    { title: "task-tracker", type: "Public", language: "Go", size: "4125 KB", updated: "Updated 6 days ago" },
    { title: "crypto-wallet", type: "Private", language: "Rust", size: "9643 KB", updated: "Updated 7 days ago" },
    { title: "news-aggregator", type: "Public", language: "Python", size: "5472 KB", updated: "Updated 5 days ago" },
    { title: "content-management", type: "Private", language: "Laravel", size: "6637 KB", updated: "Updated 3 days ago" },
    { title: "travel-booking", type: "Public", language: "React", size: "9230 KB", updated: "Updated 6 days ago" },
    { title: "recipe-sharing", type: "Private", language: "Ruby on Rails", size: "3889 KB", updated: "Updated 2 days ago" },
    { title: "event-planner", type: "Public", language: "TypeScript", size: "4325 KB", updated: "Updated 4 days ago" },
    { title: "file-sharing", type: "Private", language: "Node.js", size: "6893 KB", updated: "Updated 1 day ago" },
    { title: "cloud-storage", type: "Public", language: "Python", size: "6342 KB", updated: "Updated 5 days ago" },
    { title: "employee-management", type: "Private", language: "Java", size: "5218 KB", updated: "Updated 7 days ago" },
    { title: "real-time-chat", type: "Public", language: "React", size: "3297 KB", updated: "Updated 3 days ago" },
    { title: "movie-streaming", type: "Private", language: "Swift", size: "4964 KB", updated: "Updated 2 days ago" },
    { title: "booking-system", type: "Public", language: "PHP", size: "6417 KB", updated: "Updated 6 days ago" },
    { title: "portfolio-manager", type: "Private", language: "JavaScript", size: "7431 KB", updated: "Updated 4 days ago" },
    { title: "digital-library", type: "Public", language: "Ruby", size: "4678 KB", updated: "Updated 5 days ago" },
    { title: "chatbot-framework", type: "Private", language: "Python", size: "5591 KB", updated: "Updated 2 days ago" },
    { title: "personal-blog", type: "Public", language: "HTML/CSS", size: "1836 KB", updated: "Updated 1 day ago" },
];

  // Filter repositories based on search term
  const filteredRepositories = repositories.filter(repo => 
    repo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle refresh
  const handleRefresh = () => {
    // Reload the page
    window.location.reload();
  };

  // Handle add repository
  const handleAddRepository = () => {
    // Show a toast message
    setToastMessage("Repository added successfully!");
    // Hide the toast after 3 seconds
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Header />
      <SideBar />
      <div className="pt-16 w-full bg-[#FAFAFA] lg:p-5">
        <div className="bg-white lg:border border-[#E9EAEB] lg:rounded-lg">
          <div className="py-4 px-5">
            <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-2xl text-[#181D27] font-semibold">Repositories</h1>
                <p className="mt-1 text-sm text-[#414651]">{filteredRepositories.length} total repositories</p>
              </div>
              <div className="mt-4 lg:mt-0 flex flex-row items-center gap-3">
                {/* Refresh Button */}
                <button 
                  onClick={handleRefresh} 
                  className="hover:bg-[#FAFAFA] flex flex-row items-center gap-2 text-[#414651] text-sm py-2 px-3 rounded-lg border border-[#D5D7DA]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span>Refresh All</span>
                </button>
                {/* Add Repository Button */}
                <button 
                  onClick={handleAddRepository} 
                  className="flex flex-row items-center gap-2 text-white py-2 px-3 rounded-lg text-sm bg-[#1570EF] hover:bg-[#175CD3] border border-[#195fc8] shadow-[inset_0px_0px_0px_2px_rgba(59,_130,_246,_0.5)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span>Add Repository</span>
                </button>
              </div>
            </div>
            <div className="mt-4 w-full lg:w-fit py-2 px-3 border border-[#D5D7DA] rounded-lg flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                className="focus:outline-none"
                type="text"
                placeholder="Search Repositories"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {/* Display Repositories */}
          <ul className="lg:h-[31.5rem] lg:overflow-auto">
            {filteredRepositories.map((eachRepo, index) => (
              <RepoCard key={index} repoDetails={eachRepo} />
            ))}
          </ul>
        </div>
      </div>

      {/* Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default DashBoard;

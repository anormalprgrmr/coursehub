import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="text-center mb-3 fs-5 text-muted">
            What courses are you looking for?
          </h3>

          <div className="input-group shadow-lg rounded-3 overflow-hidden">
            <input
              type="text"
              className="form-control p-3 border-0"
              placeholder="Programming, Data Science..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              className="btn btn-primary px-4 fw-bold"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

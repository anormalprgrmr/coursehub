import React from 'react';
import './SearchBar.css'; // Assuming you'll create this CSS file

export default function SearchBar() {

    return (
        <div className="container-fluid my-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    {/* Heading for context */}
                    <h3 className="text-center mb-3 fs-5 text-muted">
                        What courses are you looking for?
                    </h3>
                    
                    {/* Input Group for a clean, aligned look */}
                    <div className="input-group mb-3 shadow-lg rounded-3 overflow-hidden custom-search-group">
                        <input 
                            type="text" 
                            className="form-control p-3 border-0" // Increased padding, removed default border
                            placeholder="e.g., Programming, Data Science, Web Development..."
                            aria-label="Course search input"
                        />
                        <button 
                            className="btn btn-primary btn-lg px-4 fs-6 fw-bold" // Larger, bolder button
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                    
                    <p className="text-center text-sm mt-2 text-success">
                        Find your next learning adventure instantly!
                    </p>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import egagets from "./dictionary/egagets";

function Search() {
    const [input, setInput] = useState("");
    const [matchingIndex, setMatchingIndex] = useState(null);
    const [foundProduct, setFoundProduct] = useState(null);

    function getValue(event) {
        event.preventDefault();

        const updatedInput = input.toLowerCase();
        console.log(updatedInput);

        // Search for a match and get the index
        const foundIndex = egagets.findIndex((val) => val.name.toLowerCase() === updatedInput);

        if (foundIndex !== -1) {
            console.log(`Match found at index ${foundIndex}`);
            setMatchingIndex(foundIndex);

            // Set the found product
            setFoundProduct(egagets[foundIndex]);

            // Display the found product using alert
            alert(`Found Product:\nName: ${egagets[foundIndex].name}\nPrice: ${egagets[foundIndex].price}`);
        } else {
            alert("Please enter a valid product name");
            setMatchingIndex(null);

            // Clear the found product when no match is found
            setFoundProduct(null);
        }

        setInput(""); // Clear the input field
    }

    return (
        <div className="SearchContainer">
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input
                                type="search"
                                className="form-control form-control-dark text-bg-dark"
                                id="searchbox"
                                placeholder="Search..."
                                aria-label="Search"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </form>
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={getValue}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Search;

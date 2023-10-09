// App.js
import React, { useState } from "react";
import Middlecontent from "./Middlecontent";
import Footer from "./Footer";
import Header from "./Header";
import CartMap from "./CartMap";
import Search from "./Search";


function App() {
    const [boolvalue, setBoolValue] = useState(false);

    return (
        <div className="parent-container">
            <Header getvalue={setBoolValue} />
            <Search />
            {boolvalue ? <CartMap /> : <Middlecontent />}
            <Footer />
        </div>
    );
}

export default App;

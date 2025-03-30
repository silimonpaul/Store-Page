// Main App component that manages the store display and temporary image functionality
import React, { useState } from 'react';
import Store from './components/Store';
import './App.css';

function App() {
  // State to control the visibility of stores list
  const [showStores, setShowStores] = useState(true);
  // State to control the visibility of popup image
  const [showTempImage, setShowTempImage] = useState(false);

  // Handler for showing temporary image popup for 200ms
  const handleImageClick = () => {
    setShowTempImage(true);
    setTimeout(() => {
      setShowTempImage(false);
    }, 200);
  };

  // Array of store data containing information about different stores
  const stores = [
    {
      name: "Electronics Store",
      address: "123 Tech Street, Digital City",
      logo: "./src/Images/Electronics-Store-img.png",
      schedule: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM"
    },
    {
      name: "Fashion Boutique",
      address: "456 Style Avenue, Fashion District",
      logo: "./src/Images/Fashion-Boutique-img.png",
      schedule: "Mon-Sat: 10AM-9PM, Sun: 11AM-6PM"
    },
    {
      name: "Home Decor",
      address: "789 Interior Boulevard, Design Quarter",
      logo: "./src/Images/Home-Decor-img.png",
      schedule: "Mon-Sun: 10AM-7PM"
    },
    {
      name: "Pawn Shop",
      address: "321 Treasure Lane, Historic District",
      logo: "./src/Images/Pawn-Shop-img.png",
      schedule: "Mon-Sat: 9AM-7PM, Sun: Closed"
    },
    {
      name: "Vintage Books",
      address: "567 Literary Road, Cultural District",
      logo: "./src/Images/Vintage-Books-img.png",
      schedule: "Tue-Sun: 10AM-8PM, Mon: Closed"
    },
    {
      name: "Coffee Shop 36",
      address: "890 Bean Street, Cafe District",
      logo: "./src/Images/Coffee-Shop-36-img.png",
      schedule: "Mon-Sun: 7AM-10PM"
    }
  ];

  return (
    // Main container with conditional className for hiding stores
    <div className={`app ${!showStores ? 'app-hidden' : ''}`}>
      {/* Button that triggers temporary image display */}
      <button 
        className="image-button"
        onClick={handleImageClick}
      >
        DON'T CLiCK !
      </button>
      {/* Conditional rendering of temporary popup image */}
      {showTempImage && (
        <div className="temp-image-container">
          <img 
            src="./src/Images/PopUp-img.png" 
            alt="Temporary Preview" 
            className="temp-image" 
          />
        </div>
      )}
      {/* Conditional rendering of stores section */}
      {showStores && (
        <>
          <h1>Stores Location and Program</h1>
          <div className="stores-container">
            {stores.map((store, index) => (
              <Store
                key={index}
                name={store.name}
                address={store.address}
                logo={store.logo}
                schedule={store.schedule}
              />
            ))}
          </div>
        </>
      )}
      {/* Toggle button to show/hide all stores */}
      <button 
        className="toggle-button"
        onClick={() => setShowStores(!showStores)}
      >
        {showStores ? 'Hide Stores' : 'Show Stores'}
      </button>
    </div>
  );
}

export default App;

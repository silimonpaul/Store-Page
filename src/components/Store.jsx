// Store component that receives store details as props
const Store = ({ name, address, logo, schedule }) => {
  return (
    // Card container for store information
    <div className="store-card">
      {/* Store logo with dynamic alt text */}
      <img src={logo} alt={`${name} logo`} className="store-logo" />
      {/* Store name */}
      <h2>{name}</h2>
      {/* Store address */}
      <p>{address}</p>
      {/* Store schedule section */}
      <div className="schedule">
        <h3>Working Hours:</h3>
        <p>{schedule}</p>
      </div>
    </div>
  );
};

export default Store;
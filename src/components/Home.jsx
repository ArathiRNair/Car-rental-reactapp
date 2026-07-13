import React from "react";
import NavigatinBar from "./NavigatinBar";

const Home = () => {
  return (
    <div>
        <NavigatinBar/>
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1
            style={{
              fontSize: "48px",
              color: "#222",
              marginBottom: "20px",
            }}
          >
            Rent Your Dream Car
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            Find the perfect car for every journey. We provide reliable,
            affordable, and comfortable vehicles for business trips, vacations,
            and everyday travel.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
            alt="Car"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>🚗 Wide Collection</h3>
          <p>Sedans, SUVs, Hatchbacks and Luxury Cars.</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>💰 Affordable Prices</h3>
          <p>Best rental rates with no hidden charges.</p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>⭐ Trusted Service</h3>
          <p>Reliable cars and excellent customer support.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
import React, { useState } from "react";

const AdditionOperationComponent = () => {
  const [fruites, setFruites] = useState(["apple", "banana"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruites = () => {
    if (newFruit.trim()) {
      const updatedFruits = [...fruites, newFruit];
      setFruites(updatedFruits);
      console.log("Fruits:", updatedFruits);
      setNewFruit("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Fruits List</h1>

        {/* Input + Button */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
            placeholder="Enter fruit name"
            style={{
              flex: 1,
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              paddingLeft: "10px",
              fontSize: "15px",
            }}
          />
          <button
            onClick={addFruites}
            style={{
              background: "#4f46e5",
              color: "white",
              border: "none",
              padding: "0 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Add
          </button>
        </div>

        {/* Table-like structure */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  background: "#f3f4f6",
                  borderRadius: "6px 6px 0 0",
                }}
              >
                Fruit Name
              </th>
            </tr>
          </thead>

          <tbody>
            {fruites.map((fruit, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e5e7eb",
                    textTransform: "capitalize",
                  }}
                >
                  {fruit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdditionOperationComponent;

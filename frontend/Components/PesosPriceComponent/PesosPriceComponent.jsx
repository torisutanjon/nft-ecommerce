//dependencies
import React from "react";

export default function PesosPriceComponent() {
  const price = 141872.22;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <p style={{ fontSize: "16px", margin: 0, padding: 0 }}>= {price}PHP</p>
    </div>
  );
}

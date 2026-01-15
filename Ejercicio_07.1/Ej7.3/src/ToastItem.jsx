import React from "react";

const ToastItem = React.memo(({ error, onClose }) => {
  console.log("Render ToastItem", error.id);

  return (
    <div style={{ border: "1px solid red", margin: 4 }}>
      {error.message}
      <button onClick={() => onClose(error.id)}>X</button>
    </div>
  );
});

export default ToastItem;

import React, { useRef } from 'react';
import Whiteboard from 'react-whiteboard';

function MyWhiteboard() {
  // Use the useRef hook to create a reference to the whiteboard
  const whiteboardRef = useRef();

  const handleSave = () => {
    // Call the save method on the whiteboard to save it as an image
    whiteboardRef.current.save();
  };

  return (
    <div>
      <Whiteboard ref={whiteboardRef} />
      <button onClick={handleSave}>Save Whiteboard</button>
    </div>
  );
}
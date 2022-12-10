import { useState } from "react";
const Form = (props) => {
    // Use the useState hook to manage the value of the input field
    const [value, setValue] = useState("");
  
    return (
      <form>
        {/* Input field for the form */}
        <input
          placeholder="Enter some text"
          value={value}
          onChange={(e) => {
            // Update the value of the input field
            setValue(e.target.value);
            // Call the onChange callback to update the value in the parent component
            console.log("inside form index",props.index)
            props.handleChange(props.index, e.target.value);
          }}
        />
      </form>
    );
  }
  export default Form
import { useState } from "react";
import Form from "../Form/Form";
const FormGenerator = (props) => {
    // Use the useState hook to manage the state of the app
    const [forms, setForms] = useState([]);
    const [values, setValues] = useState([]);

    console.log("here are all the values",values);
  
    // This method is called when the button is clicked
    const handleClick = () => {
      // Create a new form and add it to the array of forms
      const newForm = <Form index={forms.length} handleChange={handleChange} />;
      setForms(prevForms => [...prevForms, newForm]);
      setValues((prevValues)=>{
        return [...prevValues,""]
      })
    }
  
    // This method is called when the "Remove Form" button is clicked
    const handleRemove = (index) => {
      // Remove the form at the specified index from the array of forms
      setForms(prevForms => prevForms.filter((form, i) => i !== index));
      setValues(preValues=>{
        preValues.filter(((form, i) => i !== index))
      })
    }
  
    // This method is called when the value of an input field changes
    const handleChange = (index, value) => {
        
      // Update the value of the form at the specified index
      setValues(prevValues => {
        let newArr=prevValues
        console.log("pre values",prevValues)
       
        newArr.map((val, i) => i === index ? value : val)
        return newArr
    });
    }
  
    return (
      <div>
        {/* Render the forms */}
        {forms.map((form, index) => (
          <div key={index}>
            {form}
            {/* Button to remove the current form */}
            <button onClick={() => handleRemove(index)}>Remove Form</button>
          </div>
        ))}
        {/* Button to generate new forms */}
        <button onClick={handleClick}>Generate Form</button>
        {/* Button to print the values of the forms */}
        <button onClick={() => console.log(values)}>Print Values</button>
      </div>
    );
  }
  export default FormGenerator
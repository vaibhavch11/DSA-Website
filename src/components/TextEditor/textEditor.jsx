import {CKEditor} from 'ckeditor4-react';
import {useState}from 'react';



const MyEditor=({textData})=> {
    
   
 
  console.log(textData)
    console.log("here is the text in textEditor",textData);
   

  return (
    <CKEditor
    initData={`${textData}`}
      onChange={(event) => {
        console.log('Editor content changed:', event.editor.getData());
      }}
    />
  );
}

export default MyEditor





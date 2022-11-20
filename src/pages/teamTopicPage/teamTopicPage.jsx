import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class teamTopicPage extends Component {

    state = {
      editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
       this.setState({
        editorState,
       });
    }

    

    dataObjectArray= Object.entries(this.props.data);
    string_html_data='';

    subTopicArray=[];
    for(var i=1;i<dataObjectArray.length;++i){
        subTopicArray.push(Object.entries(dataObjectArray[i][1]));
    }

    //converting json to html string
    for(var i=0;i<subTopicArray.length;++i){
        string_html_data=string_html_data+subTopicArray[i][0]+subTopicArray[i][1];
    }



    contentBlock=htmlToDraft(string_html_data);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      editorState = EditorState.createWithContent(contentState);
  }
    


  render() {
    const {editorState} = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          // readOnly = {true}
        />
        
        <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent(editorState.getCurrentContent())))}></textarea>
        <button  type="button">Edit!</button>
      </div>
    );
  }
}

// import React from 'react'
// import { useState,useEffect } from 'react';
// import "../Introduction/Intro.scss"
// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

// function TeamTopicPage({data}){
//     console.log("Inside team topic page");

//     let dataObjectArray= Object.entries(data);
//     let string_html_data='';

//     let subTopicArray=[];
//     for(var i=1;i<dataObjectArray.length;++i){
//         subTopicArray.push(Object.entries(dataObjectArray[i][1]));
//     }

//     //converting json to html string
//     for(var i=0;i<subTopicArray.length;++i){
//         string_html_data=string_html_data+subTopicArray[i][0]+subTopicArray[i][1];
//     }

//     //converting html string to draft
//     const contentBlock=htmlToDraft(string_html_data);
//     function changeToEdit(){
//         setEdit((edit)=>{
//             return true;
//         })
//     }
//     const [edit, setEdit] = useState(false)
//     let editorState

//     if (contentBlock) {
//         const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
//         editorState = EditorState.createWithContent(contentState);
//     }

//     return (
//         <div>
//           <Editor
//             editorState={editorState}
//             wrapperClassName="demo-wrapper"
//             editorClassName="demo-editor"
//             onEditorStateChange={changeToEdit}
//             readOnly={edit}
//           />
//           <textarea
//             disabled
//             value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//           />
//           <button onClick={changeToEdit} type="button">Edit!</button>
//         </div>
//       );
//     }

// export default TeamTopicPage;

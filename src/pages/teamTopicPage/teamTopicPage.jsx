import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default class teamTopicPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            readOnlyState:true
        }
       let  dataObjectArray= Object.entries(this.props.data);
       
        let string_html_data='';

       let subTopicArray=[];
        
        for(var i=1;i<dataObjectArray.length;++i){
            subTopicArray.push(Object.entries(dataObjectArray[i][1]));
        }
    
        //converting json to html string
        for(var i=0;i<subTopicArray.length;++i){
            string_html_data=string_html_data+subTopicArray[i][0]+subTopicArray[i][1];
        }
        const contentBlock = htmlToDraft(string_html_data);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
          const editorState = EditorState.createWithContent(contentState);
          this.state = {
            editorState,
            
          };
        }
       
        this.changeReadOnly=this.changeReadOnly.bind(this)
      }

      componentDidUpdate(prevProps){
        console.log("inside did update")
        this.setState={
            readOnlyState:!this.readOnlyState
        }
      }
    
    

    onEditorStateChange = (editorState) => {
       this.setState={
        editorState,
       };
    }

    

    

    
  

    changeReadOnly=()=>{
        return !this.readOnlyState;
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
          readOnly = {this.state.readOnlyState}
        />
        {console.log("this is read only state",this.state.readOnlyState)}
        <textarea disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent(editorState.getCurrentContent())))}></textarea>
        <button onClick={()=>(this.changeReadOnly)} type="button">Edit!</button>
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

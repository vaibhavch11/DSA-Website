import React from 'react'
import { useState,useEffect } from 'react';
import "../Introduction/Intro.scss"
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

function TeamTopicPage({data}){
    
    
    let dataObjectArray= Object.entries(data);
    let string_html_data='';
    
    let subTopicArray=[];
    for(var i=1;i<dataObjectArray.length;++i){
        subTopicArray.push(Object.entries(dataObjectArray[i][1]));
    }

    //converting json to html string
    for(var i=0;i<subTopicArray.length;++i){
        string_html_data=string_html_data+subTopicArray[i][0]+subTopicArray[i][1];
    }
    
    //converting html string to draft
    const contentBlock=htmlToDraft(data);
    function changeToEdit(){
        setEdit((edit)=>{
            return true;
        })
    }
    const [edit, setEdit] = useState(false)
    let editorState

    if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        editorState = EditorState.createWithContent(contentState);
    }
    

       console.log(introObjectArray , "data object in useEffect");
    return (
        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            readOnly={edit}
          />
          <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
          <button onClick={changeToEdit} type="button">Edit!</button>
        </div>
      );
    }




export default TeamTopicPage;
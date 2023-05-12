import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useSelector,useDispatch } from 'react-redux';
import {changeInContent} from '../../store/addProblemSlice'

const TextEditor = ({notProblem,setContent}) => {
	console.log(notProblem)
	const editor = useRef(null);
	const content=useSelector((state)=>{
        console.log("here is the new state",state.addProblem);
        return state.addProblem.content
    })
    const dispatch=useDispatch()
	const [textData, settextData] = useState('')
	const config = {
		toolbarButtonSize: 'large',
	}
    config["readonly"]=false;
	config["spellcheck"]=true
	config["uploader"]={
		url: 'http://localhost:5000/api/v1/problems/uploadProblemImages',  //your upload api url
		insertImageAsBase64URI: false,
		imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
		//headers: {"token":`${db.token}`},
		filesVariableName: function (t) {
		  return 'files[' + t + ']';
		}, //"files",
		withCredentials: false,
		pathVariableName: 'path',
		format: 'json',
		method: 'POST',
		prepareData: function (formdata) {
		  return formdata;
		},

		isSuccess:function(resp){
			console.log(resp,"got the file successfully");
			return !resp.error
		},
		process: function (resp) {
			console.log("in process", resp.data.url)
           return resp.data.url;
        },

		defaultHandlerSuccess: function (data, resp) {
            var i,
                field = 'files';
				this.s.insertImage(data);
                
            
        },
        error: function (e) {
            this.e.fire('errorMessage', [e.getMessage(), 'error', 4000]);
        }
    }
	

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={notProblem?(newContent)=>{
				console.log('here is the new content'+newContent)
				setContent((prevVal)=>{
					console.log('inside setcontent')
					return newContent
				})
			}:(newContent) => {
                dispatch(changeInContent(newContent))}} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => {
                
                }}
		/>
	);
};

export default TextEditor
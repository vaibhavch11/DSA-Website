import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useSelector,useDispatch } from 'react-redux';
import {changeInContent} from '../../store/addProblemSlice'

const TextEditor = () => {
	const editor = useRef(null);
	const content=useSelector((state)=>{
        console.log("here is the new state",state.addProblem);
        return state.addProblem.content
    })
    const dispatch=useDispatch()

	const config = {
		toolbarButtonSize: 'large',
	}
    config["readonly"]=false;
	

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={(newContent) => {
                dispatch(changeInContent(newContent))}} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => {
                
                }}
		/>
	);
};

export default TextEditor
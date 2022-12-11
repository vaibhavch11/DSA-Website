import MyEditor from "../../components/TextEditor/textEditor";
import { useState } from "react";

const AddProblem=()=>{
    const [text, setText] = useState("")
    console.log("add problem data here ",text);
    return (<div>
        <MyEditor textData={text} setTextContent={setText} />
    </div>)
}
export default AddProblem
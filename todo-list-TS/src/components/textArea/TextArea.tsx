import React from "react";
import { Input } from "antd";
const { TextArea: AntTextArea } = Input;

//interfaces
import type { labeled } from "../../interfaces/interfaces";
import type { changeable } from "../../interfaces/interfaces";

interface TextAreaProps {
    content: string;
}

const TextArea: React.FC<TextAreaProps & labeled & changeable> = ({label, content, onChange}) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(onChange) onChange(e.target.value);
    }

    return (
        <AntTextArea placeholder={label} onChange={handleChange} value={content}></AntTextArea>
    )
}

export default TextArea
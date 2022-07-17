import React from 'react';
import { Form, Input  } from 'antd';
import "./textArea.css";

const { TextArea } = Input;

interface props {
    name: string,
    label: string,
    placeholder?: string,
    required?: boolean,
    errorMessage?: string,
}

const CustomTextArea:React.FC<props> = ({name, label, placeholder, required, errorMessage}) => {
    return(
        <>
            <Form.Item
                name={name}
                label={<label className='label'>{label}</label>}
                rules={[
                {
                    required: required,
                    message: errorMessage,
                }]}
            >
                <TextArea rows={8} className="textArea" placeholder={placeholder}/>
            </Form.Item>
        </>
    )
}


export default CustomTextArea;
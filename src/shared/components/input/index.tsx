import React from 'react';
import { Form, Input  } from 'antd';
import "./input.css";

interface props {
    name: string,
    label: string,
    placeholder?: string,
    required?: boolean,
    errorMessage?: string,
}

const CustomInput:React.FC<props> = ({name, label, placeholder, required, errorMessage}) => {
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
                <Input className="input" placeholder={placeholder}/>
            </Form.Item>
        </>
    )
}


export default CustomInput;
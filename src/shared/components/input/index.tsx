import React from 'react';
import { Form, Input  } from 'antd';
import "./input.css";
import { RuleType } from 'rc-field-form/lib/interface';

interface props {
    name: string,
    label: string,
    type?: RuleType
    placeholder?: string,
    required?: boolean,
    errorMessage?: string,
}

const CustomInput:React.FC<props> = ({name, label, type, placeholder, required, errorMessage}) => {
    return(
        <>
            <Form.Item
                name={name}
                label={<label className='label'>{label}</label>}
                rules={[
                    {
                        required: required,
                        type: type,
                        message: errorMessage,
                    }
                ]}
            >
                <Input className="input" placeholder={placeholder}/>
            </Form.Item>
        </>
    )
}


export default CustomInput;
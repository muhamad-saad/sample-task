import React from 'react';
import { Spin } from 'antd';
import "./spinner.css";


const Spinner:React.FC = () => {
    return(
        <>
            <div className="spinner">
                <Spin size="small"/>
            </div>
        </>
    )
}


export default Spinner;
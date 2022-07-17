import React from 'react';
import { Row, Col } from 'antd';
import "./container.css";

interface props {
    children: any
}

const Container:React.FC<props> = ({children}) => {
    return(
        <>
            <Row className="container" justify="center">
                <Col span={24}>
                    {children}
                </Col>
            </Row>
        </>
    )
}


export default Container;
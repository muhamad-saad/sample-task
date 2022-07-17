import React from 'react';
import { Modal, Row, Col, Typography, Button } from 'antd';
import { stopEventPropagation } from '../../utils/helper';

import {CloseOutlined} from '@ant-design/icons';
import "./modal.css";

const { Title, Paragraph } = Typography;
interface props {
    show: boolean,
    close: () => void,
    width?: number | undefined,
    title?: string,
    description?: string,
    btnText?: string,
    btnAction?: () => void,
    children?: any,
    textAlign?: any
}

const CustomModal: React.FC<props> = ({ show, close, width, title, description, btnText, btnAction, children, textAlign }) => {
    return (
        <Modal visible={show} onCancel={(e) => { stopEventPropagation(e); close() }} closable={false} footer={null} width={width} bodyStyle={{ padding: 20}}>
            <div onClick={stopEventPropagation}>
                <Row className="modalCloseIconWrapper">
                    <Col span={24}>
                        <CloseOutlined onClick={(e) => { e.stopPropagation(); e.nativeEvent.stopImmediatePropagation(); close() }} />
                    </Col>
                </Row>
                <Row className="modalContainer" style={{textAlign: textAlign}}>
                    <Col span={24}>
                        {
                            !!title &&
                            <Row className="modalTitleWrapper" style={{textAlign: textAlign === 'left' ? "center" : textAlign}}>
                                <Col span={24}>
                                    <Title className="modalTitle" level={3}>{title}</Title>
                                </Col>
                            </Row>
                        }
                        {
                            !!description &&
                            <Row className="modalParagraphWrapper" style={{textAlign: textAlign === 'left' ? "center" : textAlign}}>
                                <Col span={24}>
                                    <Paragraph className="modalParagraph">
                                        {description}
                                    </Paragraph>
                                </Col>
                            </Row>
                        }
                        {children}
                        {
                            (!!btnText && !!btnAction) &&
                            <Row className="modalActionButtonWrapper">
                                <Col span={24}>
                                    <Button onClick={btnAction} className="modalActionButton">{btnText}</Button>
                                </Col>
                            </Row>
                        }
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default CustomModal;
import React, { useState } from 'react';
import { Col, Row, Typography,Form, Button } from 'antd';
import Container from '../../shared/components/container';
import Input from '../../shared/components/input';
import TextArea from '../../shared/components/textArea';
import Modal from '../../shared/components/modal';
import Spinner from '../../shared/components/spinner';
import UseWindowSize from '../../shared/hooks/use-window-size'
import { sendMail } from '../../shared/services/mailService';
import { ShowNotification } from '../../shared/components/notification';
import "./contactUs.css";

const { Title, Text } = Typography;

const ContactUs:React.FC = () => {
    const {width} = UseWindowSize()
    const [form] = Form.useForm();
    const [showNeedHelp, setShowNeedHelp] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values: any) => {
        setIsLoading(true)
        const {status} = await sendMail(values)
        setIsLoading(false)
        form.resetFields();
        status === 200 ? 
        ShowNotification('success', "We have received your info, we will get back to you soon.", "Success"):
        ShowNotification('error', "There is some error please try again later.", "Error")
    }

    const onReset = () => {
        form.resetFields();
    };
    return(
        <>
            <Container>
                <Title level={1} className="heading"><span style={{color: "#cc8dff"}}>Contact</span> us</Title>
                <Form
                    form={form}
                    name="contactUS" 
                    onFinish={onFinish} 
                    scrollToFirstError
                    layout='vertical'
                    className="contactFormContainer"
                >
                    <Row gutter={[48, 8]} className="inputSection">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Input name="name" label="Name" placeholder='Sam'
                            />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Input 
                                name="email" label="Email Address" placeholder='sam@gmail.com' required={true}
                                type="email" errorMessage="Valid email is required"
                            />
                        </Col>
                    </Row>
                    <Row gutter={[48, 8]} className="inputSection">
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Input name="phone" label="Phone Number" placeholder='+1234 4567 8989'/>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Input name="subject" label="Subject" placeholder='Welcome'/>
                        </Col>
                    </Row>
                    <Row className="inputSection">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <TextArea name="message" label="Message" placeholder='Hey awesome! hope you are doing great ...'/>
                        </Col>
                    </Row>
                    <Row className="inputSection">
                        <Col xs={18} sm={24} md={12} lg={12} xl={12}>
                            <Button className='contactBtn' htmlType="submit">
                                {isLoading? <Spinner /> : "Send Message"}
                            </Button>
                            <Text className='resetForm' onClick={onReset}>Reset Form</Text>
                        </Col>
                        <Col xs={6} sm={24} md={12} lg={12} xl={12}>
                            <Text className='needHelp'
                                onClick={() => setShowNeedHelp(true)}
                                style={{marginTop: width < 430 ? "5%": "0"}}
                                >Need Help?
                            </Text>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Modal show={showNeedHelp} close={() => setShowNeedHelp(false)} title="Need Help?" description="We can add helping material in this section"/>
        </>
    )
}


export default ContactUs;
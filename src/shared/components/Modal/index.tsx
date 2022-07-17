import React from 'react';
import { Modal, Button, Form, Input } from 'antd';

// const {Paragraph} = Typography;

interface CustomModalProps {
    isVisible: boolean,
    handleOk: () => void,
    handleCancel: () => void,
    quotes: any,
    setQuotes: any
}

const CustomModal: React.FC<CustomModalProps> = ({ isVisible, handleOk, handleCancel, quotes, setQuotes}) => {
    const [form] = Form.useForm();
    
    const onFinish = (values: any) => {
        setQuotes([values, ...quotes])
        handleOk()
        form.resetFields();
    };

    return (
        <>
            <Modal title="Add a quote" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Author Name"
                        name="author"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Slug"
                        name="authorSlug"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Year"
                        name="dateAdded"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Quote"
                        name="content"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    );
}


export default CustomModal;
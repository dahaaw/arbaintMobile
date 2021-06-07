import {Container, Row, Col} from 'react-bootstrap';
import { Form, Input, Button, Checkbox } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    return (
        <Row className="text-center" style={{marginTop:"50%"}}>
            <h6 className="mb-4">LOGIN</h6>
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Masukkan username/email',
                    },
                    ]}
                >
                    <Input placeholder="username"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Masukkan password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="password"/>
                </Form.Item>
                
                <Form.Item>
                    <Button className="rounded" type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>

            </Form>
        </Row>
    );
}

export default Login;
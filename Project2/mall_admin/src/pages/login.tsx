import React, {useEffect, useState} from 'react';
import bg from '@/assets/img/login-bg.png';
import { Form, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import styles from './login.less';
import { login } from '@/services';
import { ILoginForm } from '@/interfaces';

const baseURL = 'http://82.156.36.178:8085';
function LoginPage() {

    const [uuid, setUuid] = useState<string>('');
    
    useEffect(()=>{
        let uuid = uuidv4();
        setUuid(uuid);
    }, []);


    const onFinish =  async (values: Omit<ILoginForm, 't' | 'sessionUUID'>) => {
        console.log('Success:', values);
        const loginForm: ILoginForm = {
            t: +new Date,
            sessionUUID: uuid,
            ...values,
        }
        let result = await login(loginForm);
        console.log('result...', result);
    };

    return <div>
        <h3>登陆页面</h3>
        <Form
            name="basic"
            wrapperCol={{offset: 7, span: 10 }}
            initialValues={{ principal: "admin", credentials: "123456", imageCode:""}}
            onFinish={onFinish}
        >
            <Form.Item
                name="principal"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder="账号"/>
            </Form.Item>

            <Form.Item
                name="credentials"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder="密码" />
            </Form.Item>
            <Form.Item
                name="imageCode"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input placeholder="验证码"/>
            </Form.Item>
            <img className={styles.captcha} src={`${baseURL}/captcha.jpg?uuid=${uuid}`} alt="" />
            <Button type="primary" htmlType="submit">
                登陆
            </Button>
        </Form>
    </div>
}

export default LoginPage;
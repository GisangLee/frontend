import React from "react";
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
  } from 'antd';
  import 'antd/dist/antd.css';
import "./scss/signup.scss"

const Signup = () => {
    return(
        <div className="signup">
            <h3 className="signup__title">회원가입</h3>
            <div className="signup__form">
                <Form
                layout="horizontal"
                >
                    <Form.Item label="닉네임" rules={[{required:true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="이메일" rules={[{required:true, type:"email"}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="비밀번호" rules={[{required:true}]}>
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item label="성별">
                        <Select>
                            <Select.Option value="gender_male">남자</Select.Option>
                            <Select.Option value="gender_female">여자</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="생일">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">회원가입</Button>
                    </Form.Item>
                </Form>
            </div>
          </div>
    );
}

export default Signup;
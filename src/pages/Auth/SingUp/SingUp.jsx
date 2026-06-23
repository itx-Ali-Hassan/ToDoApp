import { Col, ConfigProvider, Form } from "antd"
import Input from "antd/es/input/Input"
import Typography from "antd/es/typography/Typography"
import { Link } from "react-router-dom"

const AuthSingUp = () => {
  const { Title } = Typography
  const { Item } = Form

  return (
    <div className="flex items-center min-h-screen justify-center">
      <ConfigProvider theme={{
        token: {
          colorText: '#fff',
          colorBgBase: '#333',
        },
      }}>
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 space-y-4 bg-[#333] text-white rounded-lg shadow-md">
          <Title level={2} className="text-center">Sign Up</Title>
          <Form layout="vertical" className="w-full">
            <Col span={24}>
              <Item label="Email">
                <Input placeholder="Email" type="email" required variant="underlined" />
              </Item>
            </Col>
            <Col span={24}>
              <Item label="Password">
                <Input.Password placeholder="Password" required variant="underlined" />
              </Item>
            </Col>
            <Col span={24}>
              <Item label="Confirm Password">
                <Input.Password placeholder="Confirm Password" required variant="underlined" />
              </Item>
            </Col>
          </Form>
          <button className="cursor-pointer w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</button>
          <div className="flex justify-center items-center space-x-2">
            <p>Already have an account?</p>
            <Link to="/auth/sign-in" className="text-blue-600 hover:underline">Sign In</Link>
          </div>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default AuthSingUp
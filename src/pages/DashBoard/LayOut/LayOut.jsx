import { useState } from 'react';
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
import { items } from './Items';

const { Header, Content, Footer, Sider } = Layout;

const DashBoardLayOut = () => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const currentYear = new Date().getFullYear();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    <div className='flex justify-end p-2'>
                        <Avatar size={45} src={import.meta.env.VITE_USER_PFP ? import.meta.env.VITE_USER_PFP : import.meta.env.VITE_DEFAULT_USER_PFP} />
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            margin: 10,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{currentYear} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default DashBoardLayOut;
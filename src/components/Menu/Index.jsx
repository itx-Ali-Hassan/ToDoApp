import { Avatar, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    {
        label: (
            <Link to="/auth/SingUp">SingUp</Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link to="/auth/SingIn">SingIn</Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link to="/dash-board">DashBoard</Link>
        ),
        key: '2',
    },
];
const MenuDropDown = () => {
    const url = import.meta.env.VITE_DEFAULT_USER_PFP;
    const userPFP = import.meta.env.VITE_USER_PFP;
    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    <Avatar size={45} src={userPFP ? userPFP : url} />
                </Space>
            </a>
        </Dropdown>
    )
}

export default MenuDropDown;
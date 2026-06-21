import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';

export const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: 'Option 1',
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: 'Option 2',
    },
    {
        key: 'sub1',
        icon: <UserOutlined />,
        label: 'User',
        children: [
            {
                key: '3',
                label: 'Tom',
            },
            {
                key: '4',
                label: 'Bill',
            },
            {
                key: '5',
                label: 'Alex',
            },
        ],
    },
]
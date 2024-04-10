import { TabBar } from 'antd-mobile';
import { UserOutline, AppstoreOutline, FileOutline, CalendarOutline, AppOutline } from 'antd-mobile-icons';

export const Footer = () => {
    const tabs = [
        {
            key: 'result',
            title: 'Kết quả',
            icon: <FileOutline />,
            badge: '*',
        },
        {
            key: 'history',
            title: 'Lịch sử',
            icon: <CalendarOutline />,
            badge: '5',
        },
        {
            key: 'home',
            title: 'Trang chủ',
            icon: <AppOutline />,
            badge: '99+',
        },
        {
            key: 'other',
            title: 'Tiện ích',
            icon: <AppstoreOutline />,
        },
        {
            key: 'profile',
            title: 'Cá nhân',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar safeArea>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

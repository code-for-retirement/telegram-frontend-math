import { TabBar } from 'antd-mobile';
import { UserOutline, AppstoreOutline, FileOutline, CalendarOutline, AppOutline } from 'antd-mobile-icons';
import { redirect, useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const pathname:string = window.location.pathname;
    const setRouteActive = (value: string) => {
        navigate(value, { replace: true });
    }
    const tabs = [
        {
            key: '/result',
            title: 'Kết quả',
            icon: <FileOutline />,
            badge: '*'
        },
        {
            key: '/history',
            title: 'Lịch sử',
            icon: <CalendarOutline />,
            badge: '5',
            value: 'history'
        },
        {
            key: '/',
            title: 'Trang chủ',
            icon: <AppOutline />,
            badge: '99+'
        },
        {
            key: '/other',
            title: 'Tiện ích',
            icon: <AppstoreOutline />
        },
        {
            key: '/profile',
            title: 'Cá nhân',
            icon: <UserOutline />
        },
    ]

    return (
        <TabBar safeArea onChange={(value:string) => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item activeKey={pathname} key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

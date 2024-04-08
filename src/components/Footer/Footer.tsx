import './footer.scss';
import { Grid, Button } from 'antd-mobile';
import { UserOutline, AppstoreOutline, FileOutline, CalendarOutline, AppOutline } from 'antd-mobile-icons';

const defaultWalletsSelectValue = '["Tonkeeper", "OpenMask"]';

export const Footer = () => {
    return (
        <Grid columns={5} gap={8}>
            <Grid.Item>
                <Button onClick={() => {console.log('yeah')}}>
                    <FileOutline /><br />
                    Kết quả
                </Button>
            </Grid.Item>
            <Grid.Item>
                <Button onClick={() => {console.log('yeah')}}>
                    <CalendarOutline /><br />
                    Lịch sử</Button>
            </Grid.Item>
            <Grid.Item>
                <Button onClick={() => {console.log('yeah')}}>
                <AppOutline /><br />
                    Trang chủ</Button>
            </Grid.Item>
            <Grid.Item>
                <Button onClick={() => {console.log('yeah')}}>
                    <AppstoreOutline /><br />
                    Tiện ích
                </Button>
            </Grid.Item>
            <Grid.Item>
                <Button onClick={() => {console.log('yeah')}}>
                    <UserOutline /><br />
                    Cá nhân
                </Button>
            </Grid.Item>
        </Grid >
    )
}

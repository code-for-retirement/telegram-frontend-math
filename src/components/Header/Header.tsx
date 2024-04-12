import './header.scss';
import { Grid } from 'antd-mobile';
import { TonConnectButton } from "@tonconnect/ui-react";

export const Header = () => {
    return (
        <Grid columns={3} gap={8}>
            <Grid.Item>
                <h3 className="title">ViaHe</h3>
            </Grid.Item>
            <Grid.Item span={2}>
                <div style={{ float: 'right' }}>
                    <TonConnectButton />
                </div>
            </Grid.Item>
        </Grid>
    );
}

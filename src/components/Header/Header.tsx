import './header.scss';
import { Grid } from 'antd-mobile';
import { TonConnectButton } from "@tonconnect/ui-react";

export const Header = () => {
    return (
            <Grid columns={3}>
                <Grid.Item>
                    <h3 className="title">ViaHe</h3>
                </Grid.Item>
                <Grid.Item>
                    &nbsp;
                </Grid.Item>
                <Grid.Item style={{ paddingRight: "10px", paddingTop: "10px" }}>
                    <TonConnectButton />
                </Grid.Item>
            </Grid>
    );
}

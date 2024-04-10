import './header.scss';
import { Space } from 'antd-mobile';
import { TonConnectButton } from "@tonconnect/ui-react";

export const Header = () => {
    return (
        <Space direction='horizontal' align='baseline' justify='evenly'>
            <h3 className="title">ViaHe</h3>
            <TonConnectButton />
        </Space>
    );
}

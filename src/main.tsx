import './patch-local-storage-for-github-pages';

import React, { StrictMode } from 'react'
import { render } from 'react-dom';
import App from './App';
import './index.scss';
import eruda from "eruda";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { THEME, useTonWallet, TonConnectUIProvider, useTonConnectUI, UIWallet, ActionConfiguration } from "@tonconnect/ui-react";

eruda.init();

const basePath = "/telegram-frontend-math";
const manifestUrl = "https://raw.githubusercontent.com/code-for-retirement/telegram-frontend-math/main/public/tonconnect-manifest.json";
const twaConfig: ActionConfiguration = {
    twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
};
const router = createBrowserRouter([
    {
        path: basePath,
        element: <App />,
    },
    {
        path: basePath + "/children",
        element: <div>Children</div>,
    },
]);

render(
    <StrictMode>
        <TonConnectUIProvider manifestUrl={manifestUrl}
            actionsConfiguration={twaConfig}>
            <RouterProvider router={router} />
        </TonConnectUIProvider>
    </StrictMode>,
    document.getElementById('root') as HTMLElement
)

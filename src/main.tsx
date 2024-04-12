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

const basePath = import.meta.env.HOMEURL;
const manifestUrl = "https://raw.githubusercontent.com/code-for-retirement/telegram-frontend-math/main/public/tonconnect-manifest.json";
const twaConfig: ActionConfiguration = {
    twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
};
const router = createBrowserRouter([
    {
        path: basePath,
        element: <App />,
        children: [
            {
                path: "result",
                element: <div>Profile</div>,
            },
            {
                path: "history",
                element: <div>Profile</div>,
            },
            {
                path: "profile",
                element: <div>Profile</div>,
            },
            {
                path: "other",
                element: <div>Others</div>,
            },
        ],
    },
    {
        path: "*",
        element: <h2>404</h2>,
    },
]);

render(
    <StrictMode>
        <TonConnectUIProvider manifestUrl={manifestUrl}
            actionsConfiguration={twaConfig}>
            {/* <RouterProvider router={router} /> */}
            <App />
        </TonConnectUIProvider>
    </StrictMode>,
    document.getElementById('root') as HTMLElement
)

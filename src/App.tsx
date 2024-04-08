import './App.scss';
import { Header } from "./components/Header/Header";
import { TxForm } from "./components/TxForm/TxForm";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StepPickNumber } from './components/common/NewTicket/WizardSteps/StepPickNumber';
import { THEME, TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/telegram-frontend-math",
      element: <TxForm />,
      children: [
        { path: "ticket/new", element: <StepPickNumber /> },
      ],
    },
  ]);

  return (
    <div className="app">
      <TonConnectUIProvider
            manifestUrl="https://raw.githubusercontent.com/code-for-retirement/telegram-frontend-math/main/public/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.DARK }}
            walletsListConfiguration={{
                includeWallets: [
                    {
                        appName: "safepalwallet",
                        name: "SafePal",
                        imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                        aboutUrl: "https://www.safepal.com/download",
                        jsBridgeKey: "safepalwallet",
                        platforms: ["ios", "android", "chrome", "firefox"]
                    },
                    {
                        appName: "tonwallet",
                        name: "TON Wallet",
                        imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                        aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                        universalLink: "https://wallet.ton.org/ton-connect",
                        jsBridgeKey: "tonwallet",
                        bridgeUrl: "https://bridge.tonapi.io/bridge",
                        platforms: ["chrome", "android"]
                    }
                ]
            }}
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/ba_ban_nuoc_bot/so_sach_ke_toan'
            }}
        >
      <Header />
      <RouterProvider router={router} />
      </TonConnectUIProvider>
    </div>
  )
}

export default App

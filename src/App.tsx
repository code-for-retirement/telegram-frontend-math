import './App.scss';
import { useTonWallet, useTonConnectUI } from "@tonconnect/ui-react";
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  return (
    <>
      {wallet ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button onClick={() => tonConnectUi.openModal()}>
            Kết nối ví TON để tiếp tục
          </button>
        </>
      )}
    </>
  )
}

export default App

import './App.scss';
import { useTonWallet, useTonConnectUI } from "@tonconnect/ui-react";
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';
import {
  Route,
  BrowserRouter,
  Routes,
  MemoryRouter as Router,
} from 'react-router-dom'
import { AutoCenter, Space, Button } from 'antd-mobile';
import { Home } from './components/Home/Home';
import { TxForm } from './components/TxForm/TxForm';

function App() {
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  return (
    <>
      {wallet ? (
        <BrowserRouter>
          <div className="app">
            <div className="top">
              <Header />
            </div>
            <div className="body">
              <Routes>
                <Route path="/" element={<TxForm />} />
                <Route path="/profile" element={<Home />} />
              </Routes>
            </div>
            <div className="bottom">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      ) : (
        <Space direction='vertical' style={{ '--gap': '200px' }}>
          <Header />
          <AutoCenter>
            <Button size='large' color='primary' shape='rounded' onClick={() => tonConnectUi.openModal()}>
              Kết nối ví TON để tiếp tục
            </Button>
          </AutoCenter>
        </Space>
      )}
    </>
  )
}

export default App

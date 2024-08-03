import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connectWallet } from './connectWallet';
import { ReactComponent as PLUS } from './resources/plus.svg';import './Header.css';

function Header() {
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = async () => {
    const wallet = await connectWallet();
    if (wallet) {
      setWalletAddress(wallet.address);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="enabled-link">Zup In</Link>
        <Link to="/mypools" className="disabled-link">My Pools</Link>
      </div>
      <div className="header-right">
        {walletAddress ? (
          <span className="wallet-address">{walletAddress}</span>
        ) : (
          <button style={{ display: 'flex', alignItems: 'center' }} className="wallet-button" onClick={handleConnectWallet}>
            <span className='btn-text'>Connect Wallet</span>
            <PLUS style={{ marginLeft: '10px' }} /> 
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
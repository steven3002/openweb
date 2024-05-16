import { useEffect, useState } from 'react';

import NearLogo from '/public/near-logo.svg';
import { useStore } from '@/layout';

export const Navigation = () => {
  const { signedAccountId, wallet } = useStore();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel('Login');
    }
  }, [signedAccountId, wallet]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <div className='navbar-nav pt-1'>
          <button className="button-51 " onClick={action} > {label} </button>
        </div>
      </div>
    </nav>
  );
};

import { ConnectWalletButton } from '@cardano-foundation/cardano-connect-with-wallet';
import { ChevronDown } from 'react-feather';

const ConnectButton = (onConnect: (name: string) => void) => (
  <ConnectWalletButton
    message='Please sign Augusta Ada King, Countess of Lovelace'
    onConnect={onConnect}
    afterComponent={<ChevronDown />}
    primaryColor='#FFF'
  />
);

export default ConnectButton;

import { FC } from 'react';
import Button from '../components/button';
import Twitter from '../components/icons/twitter';
import Link from '../components/link';
import Stack from '../components/stack';
import Grid from '../components/grid';
import Youtube from '../components/icons/youtube';
import Discord from '../components/icons/discord';
import External from '../components/icons/external';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Wallet from '../components/wallet';
import image from '../assets/pfp.png';
import Banner from '../components/banner';
import PFP from '../assets/pfp/legends.png';
import Card from '../components/card';
import GenesisPFP from '../assets/pfp/genesis.png';
import DegenHoursPFP from '../assets/pfp/degenhours.png';
import FrogtoberPFP from '../assets/pfp/frogtober.png';
import LegendsPFP from '../assets/pfp/legends.png';
import MutantsPFP from '../assets/pfp/mutants.png';
import SerumPFP from '../assets/pfp/serum.png';
import ElementalsPFP from '../assets/pfp/elementals.png';

export const Home: FC<{}> = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };

  const genesisPortal = () => {
    alert('This will route to the Portals landing page');
  };
  
  const isConnected = true;

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={
          isConnected ? <Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={image} /> : <Button size='M'>Connect Wallet</Button>
        }>
        <Button variant='TERTIARY' size='M' active>Home</Button>
        <Button variant='TERTIARY' size='M'>Portals</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.auraexchange.org/' target="_blank">Marketplace</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='./' target="_blank">Merch</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.engagertool.app/' target="_blank">EngageR</Button>
      </Navigation>

      <Stack direction='VERTICAL' localStyles={{marginTop: 86, marginBottom: 94, '@media (min-width: 1080px)': { marginBottom: 50,}}}>

        <Banner pfp={PFP} heading='PAYC Legends'>
          <Button size='M' variant="PRIMARY" as="a" href='https://hub.auraexchange.org/collection/ethereum/0x0f4186a53774f4c73cb90f278d26094cce765720' target="_blank">View Collection</Button>
        </Banner>

          {/* Home Tiles */}
          <Grid
            columns={1}
            gap={'var(--scale-48)'}
            localStyles={{
              padding: 'var(--scale-48)',
              gridTemplateColumns: '1fr',
              '@media (min-width: 800px)' :{
                gridTemplateColumns: '1fr 1fr',
              },
              '@media (min-width: 1200px)' :{
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
              },
            }}>
            <Card heading="Genesis" size='7,777' pfp={GenesisPFP} direction="VERTICAL">
              <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/Ethereum/0x2d0d57d004f82e9f4471caa8b9f8b1965a814154' target="_blank">View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={genesisPortal}>Select Portal</Button>
            </Card>
            <Card heading="Mutants" size='2,801' pfp={MutantsPFP} direction="VERTICAL">
              <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x0802f7a7c48426e972a30aaab3c2f35c14a35bc8' target="_blank">View Collection</Button>
              <Button size='M' variant="PRIMARY" disabled>Mint Closed</Button>
            </Card>
            <Card heading="Serum" size='Coming soon' pfp={SerumPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick} disabled>Burn 5 Mutants 🔥</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick} disabled>Buy with Sheesh</Button>
            </Card>
            <Card heading="Elementals" size='Coming soon' pfp={ElementalsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick} disabled>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick} disabled>Apply Serum</Button>
            </Card>
            <Card heading="Degen Hours" size='1,302' pfp={DegenHoursPFP} direction="VERTICAL">
              <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x577c0379ba192c3293f207b40327f34d18f9e7e3' target="_blank">View Collection</Button>
              <Button as="a" size='M' variant="PRIMARY" href='...' target="_blank">Select Portal</Button>
            </Card>
            <Card heading="Frogtober" size='2,615' pfp={FrogtoberPFP} direction="VERTICAL">
              <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0xea3a82c8fdd0f7e7fd36a58900ff9aa39995c9ce' target="_blank">View Collection</Button>
              <Button as="a" size='M' variant="PRIMARY" href='...' target="_blank">Select Portal</Button>
            </Card>
            <Card heading="Legends" size='1,000' pfp={LegendsPFP} direction="VERTICAL">
              <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x0f4186a53774f4c73cb90f278d26094cce765720' target="_blank">View Collection</Button>
              <Button as="a" size='M' variant="PRIMARY" disabled>Portal Paused</Button>
            </Card>
  
          </Grid>

        {/* FOOTER */}
        <Footer
          localStyles={{position: 'fixed', bottom: 0, left: 0}} 
          socials={
            <>
              <Link iconOnly href="https://discord.com/invite/SXayyRHar2" target="_blank"><Discord theme="LIGHT" size="S" /></Link>
              <Link iconOnly href="https://twitter.com/PepeApeYC" target="_blank"><Twitter theme="LIGHT" size="S" /></Link>
              <Link iconOnly href="https://www.youtube.com/@pepeapeyachtclub2584" target="_blank"><Youtube theme="LIGHT" size="S" /></Link>
            </>
          } 
        />

      </Stack>
    </>
  );
}

export default Home;

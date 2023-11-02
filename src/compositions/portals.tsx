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
import Card from '../components/card';
import DegenHoursPFP from '../assets/pfp/degenhours.png';
import FrogtoberPFP from '../assets/pfp/frogtober.png';
import LegendsPFP from '../assets/pfp/legends.png';

export const Portals: FC<{}> = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  const isConnected = true;

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={
          isConnected ? <Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={image} /> : <Button size='M'>Connect Wallet</Button>
        }>
        <Button variant='TERTIARY' size='M'>Home</Button>
        <Button variant='TERTIARY' size='M' active>Portals</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.auraexchange.org/' target="_blank">Marketplace</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='./' target="_blank">Merch</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.engagertool.app/' target="_blank">EngageR</Button>
      </Navigation>

      <Stack direction='VERTICAL' localStyles={{marginTop: 86, marginBottom: 94, '@media (min-width: 1080px)': { marginBottom: 50,}}}>

          {/* Portal Tiles */}
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
                gridTemplateColumns: '1fr',
              },
            }}>
            <Card heading="Degen Hours" size='1,302' pfp={DegenHoursPFP} direction="HORIZONTAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Frogtober" size='2,615' pfp={FrogtoberPFP} direction="HORIZONTAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Legends" size='1,000' pfp={LegendsPFP} direction="HORIZONTAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
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

export default Portals;

import styled from '@emotion/styled';
import Button from '../components/button';
import Twitter from '../components/icons/twitter';
import Link from '../components/link';
import Stack from '../components/stack';
import Grid from '../components/grid';
import Youtube from '../components/icons/youtube';
import Discord from '../components/icons/discord';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Wallet from '../components/wallet';
import image from '../assets/pfp.png';
import Heading from '../components/heading';
import Box from '../components/box';
import background from '../assets/portals/degen/background.gif';
import Body from '../components/body';
import ChevronDown from '../components/icons/chevron';
import PFP from '../assets/pfp/legends.png';
import Tile from '../components/tile';

export const PortalTemplateExternal: React.FC = () => {

  const handleClick = () => {
    alert('Select PepeApes!');
  };

  const filterClick = () => {
    alert('Filter Dialog');
  };
  
  const isConnected = false;

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={
          isConnected ? <Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={image} /> : <Button size='M'>Connect Wallet</Button>
        }>
          <Button as="a" variant='TERTIARY' size='M' href='https://pepeapeyachtclub.com' target="_blank">Return home</Button>
      </Navigation>

      <Stack 
        direction='VERTICAL' 
        localStyles={{
          marginTop: 86, 
          marginBottom: 94,
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('${background}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          alignItems: 'center',
          '@media (min-width: 1080px)': { 
            marginBottom: 50,
          }
        }}>

          {/* Portal Tiles */}
          <Grid
            columns={1}
            gap={'var(--scale-48)'} 
            localStyles={{
              padding: 'var(--scale-48)',
              gridTemplateColumns: '1fr',
              textAlign: 'center',
              '@media (min-width: 800px)': {
                marginTop: 'var(--scale-60)',
                maxWidth: 900,
                width: '100%'
              }
            }}>
              <Stack direction='VERTICAL' space={'var(--scale-24)'} localStyles={{alignItems: 'center'}}>
                <Heading level='3'>Frogtober Portal</Heading>
                <Body size='M'localStyles={{maxWidth: '60ch'}}>SELECT NFTs YOU WOULD LIKE TO SEND THROUGH PORTAL AND THEN CLICK THE EXCHANGE BUTTON</Body>
              </Stack>

              <Box>
                  <Stack
                    direction='HORIZONTAL'
                    localStyles={{
                      justifyContent: 'space-between',
                      background: 'rgb(0 0 0 / 50%)',
                      padding: 'var(--scale-16)',
                      borderTopRightRadius: 'var(--scale-8)',
                      borderTopLeftRadius: 'var(--scale-8)'
                    }}>
                      <Button size='S' variant='SECONDARY' onClick={filterClick} active after={<ChevronDown size="S" />}>Filter by</Button>
                      {isConnected ? <Button size='S' variant='PRIMARY' onClick={handleClick}>Exchange Selected</Button> : <Button size='S' variant='PRIMARY' onClick={handleClick} disabled>Exchange Selected</Button>}
                  </Stack>
                  <Box 
                    localStyles={{
                      background: 'rgb(255 255 255 / 10%)', 
                      minHeight: 300, 
                      borderBottomRightRadius: 'var(--scale-8)',
                      borderBottomLeftRadius: 'var(--scale-8)',
                    }}>
                      <Grid columns={1} localStyles={{
                        gridTemplateColumns: 'repeat(2, 1fr);',
                        padding: 'var(--scale-24)',
                        '@media (min-width: 600px)' :{
                          gridTemplateColumns: 'repeat(3, 1fr);',
                        },
                        '@media (min-width: 1000px)' :{
                          gridTemplateColumns: 'repeat(4, 1fr);',
                        },
                      }}>
                        <Tile active image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                        <Tile image={PFP} title="678" />
                      </Grid>
                  </Box>
            </Box>
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
};

export default PortalTemplateExternal;

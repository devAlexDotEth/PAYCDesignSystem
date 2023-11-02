import { FC } from 'react';
import Button from '../components/button';
import Twitter from '../components/icons/twitter';
import Link from '../components/link';
import Stack from '../components/stack';
import Youtube from '../components/icons/youtube';
import Discord from '../components/icons/discord';
import External from '../components/icons/external';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Wallet from '../components/wallet';
import image from '../assets/pfp.png';
import background from '../assets/contact/background.png';
import Heading from '../components/heading';

export const Portals: FC<{}> = () => {
  
  const isConnected = true;

  const Contact = `Contact`;

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={
          isConnected ? <Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={image} /> : <Button size='M'>Connect Wallet</Button>
        }>
        <Button variant='TERTIARY' size='M'>Home</Button>
        <Button variant='TERTIARY' size='M'>Portals</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.auraexchange.org/' target="_blank">Marketplace</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='./' target="_blank">Merch</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.engagertool.app/' target="_blank">EngageR</Button>
      </Navigation>


      {/* Contact background */}
      <Stack 
        direction='VERTICAL' 
        localStyles={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0%), rgb(0 0 0 / 70%)), url('${background}')`,
          backgroundPosition: 'center left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          padding: 'var(--scale-48)',
          marginTop: 86, 
          marginBottom: 50,
          '@media (min-width: 800px)': { 
            padding: 'var(--scale-72)',
          }
        }}>

          <Stack
            direction="VERTICAL"
            space={'var(--scale-36)'} 
            localStyles={{
              maxWidth: 1200,
              alignItems: 'center',
              '@media (min-width: 600px)': { 
                alignItems: 'start',
              }
            }}>

              {/* Desktop Heading */}
              <Heading 
                level="1"
                localStyles={{
                  display: 'none', 
                  '@media (min-width: 600px)' :{
                    display: 'block'
                  },
                }}
              >
                {Contact}
              </Heading>

              {/* Mobile Heading */}
              <Heading 
                level="3"
                localStyles={{
                  display: 'block', 
                  '@media (min-width: 600px)' :{
                    display: 'none'
                  },
                }}
              >
                {Contact}
              </Heading>

              {/* Actions */}
              <Stack 
                direction="VERTICAL" 
                space={'var(--scale-24)'}
                localStyles={{ 
                  alignItems: 'stretch',
                  '@media (min-width: 600px)': { 
                    alignItems: 'start',
                  }
                }}
              >
                <Button size='M' variant='SECONDARY' href="https://discord.com/invite/SXayyRHar2" target="_blank" before={<Discord theme="LIGHT" size="L" />}>Discord</Button>
                <Button size='M' variant='SECONDARY' href="https://twitter.com/PepeApeYC" target="_blank" before={<Twitter theme="LIGHT" size="L" />}>Twitter</Button>
                <Button size='M' variant='SECONDARY' href="https://www.youtube.com/@pepeapeyachtclub2584" target="_blank" before={<Youtube theme="LIGHT" size="L" />}>Youtube</Button>
              </Stack>
          </Stack>

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

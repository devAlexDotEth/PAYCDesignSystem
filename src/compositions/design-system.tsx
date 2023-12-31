import { FC, useState } from 'react';
import Body from '../components/body';
import Button from '../components/button';
import Heading from '../components/heading';
import Eth from '../components/icons/eth';
import Twitter from '../components/icons/twitter';
import Box from '../components/box';
import Code from '../components/code';
import Stack from '../components/stack';
import Grid from '../components/grid';
import Youtube from '../components/icons/youtube';
import Menu from '../components/icons/menu';
import ChevronDown from '../components/icons/chevron';
import Discord from '../components/icons/discord';
import Logo from '../components/logo';
import Fast from '../components/icons/fast';
import Medium from '../components/icons/medium';
import Slow from '../components/icons/slow';
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
import Dialog from '../components/dialog';
import DialogHeader from "../assets/dialog-header.png";
import AmountInput from '../components/amountInput';
import Anchor from '../components/anchor';

export const DesignSystem: FC<{}> = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };

  const isConnected = true;

  const BoxHorSnippet = `<Box localStyles={{ padding: 48, background: '#343434' }}>...</Box>`;
  const StackHorSnippet = `<Stack space={24} direction='HORIZONTAL'>...</Stack>`;
  const StackVerSnippet = `<Stack space={24} direction='VERTICAL'>...</Stack>`;
  const GridSnippet = `<Grid columns={3} gap={24}>...</Grid>`;
  const AnchorSnippet = `<Anchor href="#">Anchor</Anchor>`;
  const AnchorBeforeSnippet = `<Anchor before={<Discord />} href="#">Anchor</Anchor>`;
  const AnchorAfterSnippet = `<Anchor after={<Twitter />} href="#">Anchor</Anchor>`;
  const DialogSnippet = `<Dialog backdropClose={() => setIsRevealed(!isRevealed)} image={DialogHeader}>...</Dialog>`;
  const LogoSnippet = `<Logo />`;
  const CardVerticalSnippet = `<Card heading="Genesis" description='Collection Size • 7,777' pfp={GenesisPFP} direction="VERTICAL">`
  const CardHorizonalSnippet = `<Card heading="Degen Hours" description='Untransferrable & Secure' pfp={DegenHoursPFP} direction="HORIZONTAL">`
  const BannerSnippet = `<Banner pfp={PFP} heading='PAYC Legends' description='Elvis Presley via the Rockabilly Hall of Fame Museum'>...</Banner>`
  const ButtonSmallPrimary = `<Button size='S' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonMediumPrimary = `<Button size='M' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonLargePrimary = `<Button size='L' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonSmallSecondary = `<Button size='S' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonMediumSecondary = `<Button size='M' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonLargeSecondary = `<Button size='L' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonSmallTeriary = `<Button size='S' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonMediumTeriary = `<Button size='M' variant="PRIMARY" onClick={handleClick}>...</Button>`
  const ButtonLargeTeriary = `<Button size='L' variant="PRIMARY" onClick={handleClick}>...</Button>`

  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={
          isConnected ? <Button size='M'>Connect Wallet</Button> : <Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={image} />
        }>
        <Button variant='TERTIARY' size='M' active>Home</Button>
        <Button variant='TERTIARY' size='M'>Portals</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.auraexchange.org/' target="_blank">Marketplace</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='./' target="_blank">Merch</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.engagertool.app/' target="_blank">EngageR</Button>
      </Navigation>

      <Stack direction='VERTICAL' localStyles={{marginTop: 86, marginBottom: 94, '@media (min-width: 1080px)': { marginBottom: 50,}}}>

        <Stack space={'var(--scale-72)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Heading level="1">PAYC Design System</Heading>
        </Stack>


        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Heading level="3">Component / Banner</Heading>
          <Code>{BannerSnippet}</Code>
        </Stack>
        <Banner pfp={PFP} heading='PAYC Legends' description='Elvis Presley via the Rockabilly Hall of Fame Museum'>
          <Button size='M' variant="PRIMARY" as="a" href='https://hub.auraexchange.org/collection/ethereum/0x0f4186a53774f4c73cb90f278d26094cce765720' target="_blank">View Collection</Button>
        </Banner>


        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)', paddingBottom: 0}}>
          <Heading level="3">Component / Cards / Vertical</Heading>
          <Code>{CardVerticalSnippet}</Code>
        </Stack>
        <Grid
        columns={1}
        localStyles={{
          padding: 'var(--scale-24)',
          gap: 'var(--scale-24)',
          gridTemplateColumns: '1fr',
          '@media (min-width: 600px)' :{
            padding: 'var(--scale-48)',
            gap: 'var(--scale-48)',
          },
          '@media (min-width: 800px)' :{
            gridTemplateColumns: '1fr 1fr',
          },
          '@media (min-width: 1200px)' :{
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
          },
          '@media (min-width: 2000px)' :{
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          },
        }}>
          <Card heading="Genesis" description='Collection Size • 7,777' pfp={GenesisPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/Ethereum/0x2d0d57d004f82e9f4471caa8b9f8b1965a814154' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="PRIMARY" href='/portals'>View Portals</Button>
          </Card>
          <Card heading="Degen Hours" description={`Untransferrable & Secure`} pfp={DegenHoursPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x577c0379ba192c3293f207b40327f34d18f9e7e3' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="SECONDARY" href='...' target="_blank" disabled>Select Portal</Button>
          </Card>
          <Card heading="Frogtober" description='Chance to Pull a Rare' pfp={FrogtoberPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0xea3a82c8fdd0f7e7fd36a58900ff9aa39995c9ce' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="SECONDARY" href='...' target="_blank" disabled>Select Portal</Button>
          </Card>
          <Card heading="Legends" description='Past &amp; Present Icons' pfp={LegendsPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x0f4186a53774f4c73cb90f278d26094cce765720' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="SECONDARY" href='...' target="_blank" disabled>Portal Paused</Button>
          </Card>
        </Grid>


        {/* Portal Tiles */}

        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{paddingLeft: 'var(--scale-48)', paddingRight: 'var(--scale-48)'}}>
          <Heading level="3">Component / Cards / Horizontal</Heading>
          <Code>{CardHorizonalSnippet}</Code>
        </Stack>
        <Grid
          columns={1}
          localStyles={{
            padding: 'var(--scale-24)',
            gap: 'var(--scale-24)',
            gridTemplateColumns: '1fr',
            '@media (min-width: 600px)' :{
              padding: 'var(--scale-48)',
              gap: 'var(--scale-48)',
            },
            '@media (min-width: 800px)' :{
              gridTemplateColumns: '1fr 1fr',
            },
            '@media (min-width: 1200px)' :{
              gridTemplateColumns: '1fr',
            },
        }}>
          <Card heading="Degen Hours" description='Untransferrable & Secure' pfp={DegenHoursPFP} direction="HORIZONTAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x577c0379ba192c3293f207b40327f34d18f9e7e3' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="PRIMARY" href='...' target="_blank" disabled>Select Portal</Button>
          </Card>
        </Grid>

        {/* LAYOUT */}
        <Stack space={'var(--scale-72)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Heading level="3">Component / Layout</Heading>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Box Example</Heading>
            <Code>{BoxHorSnippet}</Code>
            <Box localStyles={{ padding: 'var(--scale-48)', background: 'var(--dark-200)' }}>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Box>
          </Stack>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Stack Example / Horizontal direction</Heading>
            <Code>{StackHorSnippet}</Code>
            <Stack space={'var(--scale-24)'} direction='HORIZONTAL'>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Stack>
          </Stack>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Stack Example / Vertical direction</Heading>
            <Code>{StackVerSnippet}</Code>
            <Stack space={'var(--scale-24)'} direction='VERTICAL'>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ width: 'var(--scale-24)', height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Stack>
          </Stack>
          <Stack space={'var(--scale-12)'} direction='VERTICAL'>
            <Heading level="6">Grid Example</Heading>
            <Code>{GridSnippet}</Code>
            <Grid columns={3} gap="var(--scale-24)">
              <Box localStyles={{ height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
              <Box localStyles={{ height: 'var(--scale-24)', background: 'var(--dark-100)' }}><></></Box>
            </Grid>
          </Stack>
        </Stack>

        {/* LOGO */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" localStyles={{marginBottom: 'var(--scale-12)'}}>Component / Logo</Heading>
            <Code>{LogoSnippet}</Code>
          </Box>
          <Logo />
        </Stack>

        {/* DIALOG */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)', alignItems: "start"}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" theme='LIGHT' localStyles={{marginBottom: 'var(--scale-12)'}}>Component / Dialog</Heading>
            <Code>{DialogSnippet}</Code>
          </Box>
          <Button size='L' onClick={() => setIsRevealed(!isRevealed)}>Open Dialog</Button>
          {isRevealed &&
            <Dialog backdropClose={() => setIsRevealed(!isRevealed)} image={DialogHeader}>
              <Body size='L'>Purchase serums with $SHS</Body>
              <AmountInput decrease={() => {}} increase={() => {}} amount={0} />
              <Stack direction="HORIZONTAL" space={'var(--scale-12)'} localStyles={{justifyContent: 'center'}}>
                <Button size='M' variant="SECONDARY" onClick={() => setIsRevealed(!isRevealed)} localStyles={{marginTop: 'var(--scale-8)'}}>Close</Button>
                <Button size='M' variant="PRIMARY" onClick={() => {}} localStyles={{marginTop: 'var(--scale-8)'}}>Submit</Button>
              </Stack>
            </Dialog>
          }
        </Stack>

        {/* ICONS */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Icons</Heading>
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)', padding: 'var(--scale-48)'}}>
            <Twitter theme="LIGHT" size="L" />
            <Twitter theme="LIGHT" size="M" />
            <Twitter theme="LIGHT" size="S" />
            <Youtube theme="LIGHT" size="L" />
            <Youtube theme="LIGHT" size="M" />
            <Youtube theme="LIGHT" size="S" />
            <Menu theme="LIGHT" size="L" />
            <Menu theme="LIGHT" size="M" />
            <Menu theme="LIGHT" size="S" />
            <Discord theme="LIGHT" size="L" />
            <Discord theme="LIGHT" size="M" />
            <Discord theme="LIGHT" size="S" />
            <ChevronDown theme="LIGHT" size="L" />
            <ChevronDown theme="LIGHT" size="M" />
            <ChevronDown theme="LIGHT" size="S" />
            <Fast theme="LIGHT" size="L" />
            <Fast theme="LIGHT" size="M" />
            <Fast theme="LIGHT" size="S" />
            <Medium theme="LIGHT" size="L" />
            <Medium theme="LIGHT" size="M" />
            <Medium theme="LIGHT" size="S" />
            <Slow theme="LIGHT" size="L" />
            <Slow theme="LIGHT" size="M" />
            <Slow theme="LIGHT" size="S" />
            <Eth theme="LIGHT" size="L" />
            <Eth theme="LIGHT" size="M" />
            <Eth theme="LIGHT" size="S" />
            <External theme="LIGHT" size="L" />
            <External theme="LIGHT" size="M" />
            <External theme="LIGHT" size="S" />
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)', padding: 'var(--scale-48)', background: 'white' }}>
            <Twitter theme="DARK" size="L" />
            <Twitter theme="DARK" size="M" />
            <Twitter theme="DARK" size="S" />
            <Youtube theme="DARK" size="L" />
            <Youtube theme="DARK" size="M" />
            <Youtube theme="DARK" size="S" />
            <Menu theme="DARK" size="L" />
            <Menu theme="DARK" size="M" />
            <Menu theme="DARK" size="S" />
            <Discord theme="DARK" size="L" />
            <Discord theme="DARK" size="M" />
            <Discord theme="DARK" size="S" />
            <ChevronDown theme="DARK" size="L" />
            <ChevronDown theme="DARK" size="M" />
            <ChevronDown theme="DARK" size="S" />
            <Fast theme="DARK" size="L" />
            <Fast theme="DARK" size="M" />
            <Fast theme="DARK" size="S" />
            <Medium theme="DARK" size="L" />
            <Medium theme="DARK" size="M" />
            <Medium theme="DARK" size="S" />
            <Slow theme="DARK" size="L" />
            <Slow theme="DARK" size="M" />
            <Slow theme="DARK" size="S" />
            <Eth theme="DARK" size="L" />
            <Eth theme="DARK" size="M" />
            <Eth theme="DARK" size="S" />
            <External theme="DARK" size="L" />
            <External theme="DARK" size="M" />
            <External theme="DARK" size="S" />
          </Box>
        </Stack>

        {/* BUTTON */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" localStyles={{marginBottom: 'var(--scale-12)'}}>Component / Button</Heading>
            <Stack direction='VERTICAL' space={'var(--scale-12)'}>
              <Code>{ButtonSmallPrimary}</Code>
              <Code>{ButtonMediumPrimary}</Code>
              <Code>{ButtonLargePrimary}</Code>
            </Stack>
          </Box>

          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)', marginBottom: 'var(--scale-60)' }}>
            <Button size='S' variant="PRIMARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='M' variant="PRIMARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='L' variant="PRIMARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='S' variant="SECONDARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='M' variant="SECONDARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='L' variant="SECONDARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='S' variant="TERTIARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='M' variant="TERTIARY" onClick={handleClick}>Enter Portal</Button>
            <Button size='L' variant="TERTIARY" onClick={handleClick}>Enter Portal</Button>
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)' }}>
            <Button iconOnly size='S' variant="PRIMARY" onClick={handleClick}><Twitter size="S" theme="DARK"/></Button>
            <Button iconOnly size='M' variant="PRIMARY" onClick={handleClick}><Twitter size="M" theme="DARK"/></Button>
            <Button iconOnly size='L' variant="PRIMARY" onClick={handleClick}><Twitter size="L" theme="DARK"/></Button>
            <Button iconOnly size='S' variant="SECONDARY" onClick={handleClick}><Twitter size="S" /></Button>
            <Button iconOnly size='M' variant="SECONDARY" onClick={handleClick}><Twitter size="M" /></Button>
            <Button iconOnly size='L' variant="SECONDARY" onClick={handleClick}><Twitter size="L" /></Button>
            <Button iconOnly size='S' variant="TERTIARY" onClick={handleClick}><Twitter size="S"/></Button>
            <Button iconOnly size='M' variant="TERTIARY" onClick={handleClick}><Twitter size="M"/></Button>
            <Button iconOnly size='L' variant="TERTIARY" onClick={handleClick}><Twitter size="L"/></Button>
          </Box>

        </Stack>

        {/* ANCHOR */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Link</Heading>
          </Box>
          <Box localStyles={{ display: 'flex', alignItems: 'center', gap: 'var(--scale-24)' }}>
            <Anchor href="#">Link</Anchor>
            <Anchor before={<Discord />} href="#">Link</Anchor>
            <Anchor after={<Twitter />} href="#">Link</Anchor>
          </Box>
          <Code>{AnchorSnippet}</Code>
          <Code>{AnchorBeforeSnippet}</Code>
          <Code>{AnchorAfterSnippet}</Code>
        </Stack>

        {/* HEADING - LIGHT */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Heading [Light]</Heading>
          </Box>
          <Heading level="1">Payc</Heading>
          <Heading level="2">Payc</Heading>
          <Heading level="3">Payc</Heading>
          <Heading level="4">Payc</Heading>
          <Heading level="5">Payc</Heading>
          <Heading level="6">Payc</Heading>
        </Stack>

        {/* HEADING - DARK */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)', background: 'white'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" theme="DARK">Component / Heading [Dark]</Heading>
          </Box>
          <Heading level="1" theme="DARK">Payc</Heading>
          <Heading level="2" theme="DARK">Payc</Heading>
          <Heading level="3" theme="DARK">Payc</Heading>
          <Heading level="4" theme="DARK">Payc</Heading>
          <Heading level="5" theme="DARK">Payc</Heading>
          <Heading level="6" theme="DARK">Payc</Heading>
        </Stack>

        {/* BODY - LIGHT */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3">Component / Body [Light]</Heading>
          </Box>
          <Body size="S">The green pepe ape jumps over the lazy toad</Body>
          <Body size="M">The green pepe ape jumps over the lazy toad</Body>
          <Body size="L">The green pepe ape jumps over the lazy toad</Body>
          <Body size="S" weight='BOLD'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="M" weight='BOLD'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="L" weight='BOLD'>The green pepe ape jumps over the lazy toad</Body>
        </Stack>

        {/* BODY - DARK */}
        <Stack space={'var(--scale-24)'} direction='VERTICAL' localStyles={{padding: 'var(--scale-48)', background: 'white'}}>
          <Box localStyles={{ marginBottom: 'var(--scale-24)' }}>
            <Heading level="3" theme='DARK'>Component / Body [Light]</Heading>
          </Box>
          <Body size="S" theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="M" theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="L" theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="S" weight='BOLD' theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="M" weight='BOLD' theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
          <Body size="L" weight='BOLD' theme='DARK'>The green pepe ape jumps over the lazy toad</Body>
        </Stack>

        {/* FOOTER */}
        <Footer
          contactLink='/contact'
          localStyles={{position: 'fixed', bottom: 0, left: 0}} 
          socials={
            <>
              <Anchor iconOnly href="https://discord.com/invite/SXayyRHar2" target="_blank"><Discord theme="LIGHT" size="S" /></Anchor>
              <Anchor iconOnly href="https://twitter.com/PepeApeYC" target="_blank"><Twitter theme="LIGHT" size="S" /></Anchor>
              <Anchor iconOnly href="https://www.youtube.com/@pepeapeyachtclub2584" target="_blank"><Youtube theme="LIGHT" size="S" /></Anchor>
            </>
          } 
        />

      </Stack>
    </>
  );
}

export default DesignSystem;

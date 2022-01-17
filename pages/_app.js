import Image from 'next/image';
import '../styles/globals.css';

const Header = () => {
  return (
    <div style={{display: 'flex', width: '100%', backgroundColor: '#0176fe', padding: '10px 20px'}}>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={150}
        height={50}
      />
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

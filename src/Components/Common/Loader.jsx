import { Loader as DreiLoader } from '@react-three/drei';

export default function Loader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10, 10, 20, 0.95)',
      zIndex: 9999,
      flexDirection: 'column',
    }}>
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        letterSpacing: '0.2em',
        color: '#00FFD0',
        marginBottom: '1.5rem',
        textShadow: '0 2px 16px #00FFD0, 0 1px 1px #222',
        fontFamily: 'Poppins, Azonix, Arial, sans-serif',
      }}>
        AIIF
      </div>
      <DreiLoader 
        barStyles={{
          height: '8px',
          borderRadius: '4px',
          background: 'linear-gradient(90deg, #00FFD0 0%, #0055FF 100%)',
        }}
        innerStyles={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '4px',
        }}
        dataStyles={{
          color: '#fff',
          fontSize: '1.1rem',
          marginTop: '1rem',
          fontFamily: 'Poppins, Azonix, Arial, sans-serif',
        }}
        containerStyles={{
          background: 'none',
          boxShadow: 'none',
        }}
      />
    </div>
  );
} 
import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';

// List of all models that need to be preloaded
const MODEL_PATHS = [
  '/models/NewModels/compressed_globespin.glb',
  '/models/showcaseroom/Factory.glb',
  '/models/NewModels/bookanimation.glb',
  '/models/NewModels/compressed_books.glb',
  '/models/NewModels/compressed_pen.glb',
  '/models/NewModels/compressed_laptopmac.glb',
  '/models/NewModels/compressed_1753687805860_startupTN.glb',
  '/models/NewModels/compressed_Pixel 7 Pro.glb',
  '/models/NewModels/compressed_startuprocket.glb',
  '/models/NewModels/scifirouter.glb',
  '/models/NewModels/wifi.glb',
  '/models/showcaseroom/Sci Fi Box.glb',
  '/models/showcaseroom/Magnifier.glb',
  '/models/showcaseroom/Mobile controller.glb',
  '/models/showcaseroom/Floting.glb',
  '/models/showcaseroom/Face Scanner.glb',
  '/models/showcaseroom/Humanoid Robot.glb',
  '/models/showcaseroom/Control Pannel.glb',
  '/models/showcaseroom/Restaurant.glb',
  '/models/showcaseroom/Bulb.glb',
  '/models/showcaseroom/Robo.glb',
  '/models/showcaseroom/coffee box.glb',
  '/models/showcaseroom/vault.glb',
  '/models/showcaseroom/bitcoin.glb',
  '/models/showcaseroom/center element.glb'
];

export function ModelPreloader() {
  const [loadedCount, setLoadedCount] = useState(0);
  
  useEffect(() => {
    // Preload all models
    const preloadPromises = MODEL_PATHS.map(async (path) => {
      try {
        await useGLTF.preload(path);
        setLoadedCount(prev => prev + 1);
        return path;
      } catch (error) {
        console.warn(`Failed to preload model: ${path}`, error);
        setLoadedCount(prev => prev + 1); // Count as loaded to avoid hanging
        return null;
      }
    });
    
    Promise.allSettled(preloadPromises).then(() => {
      console.log('All models preloaded');
    });
  }, []);
  
  return null; // This component doesn't render anything
}

// Export for use in other components
export { MODEL_PATHS };
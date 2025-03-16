"use client";

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { usePathname, useRouter } from 'next/navigation';

// Add type declarations for the global window objects
declare global {
  interface Window {
    THREE?: any;
    VANTA?: {
      FOG?: (options: any) => any;
    };
  }
}

interface VantaFogBackgroundProps {
  children: React.ReactNode;
}

export default function VantaFogBackground({ children }: VantaFogBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [threeJsLoaded, setThreeJsLoaded] = useState(false);
  const [vantaJsLoaded, setVantaJsLoaded] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [mountId, setMountId] = useState(Date.now()); // Unique ID for each mount
  
  // Get current pathname to force remounting when path changes
  const pathname = usePathname();
  const router = useRouter();

  // Reset loaded states when component mounts
  useEffect(() => {
    // Force reset of loaded states on mount
    setThreeJsLoaded(false);
    setVantaJsLoaded(false);
    setMountId(Date.now()); // Generate new mount ID
    
    // Ensure any existing effect is destroyed
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }
    
    // Check if scripts are already loaded in window
    if (typeof window !== 'undefined') {
      if (window.THREE) {
        setThreeJsLoaded(true);
      }
      if (window.VANTA) {
        setVantaJsLoaded(true);
      }
    }
    
    // Add a listener for beforeunload to clean up
    const handleBeforeUnload = () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      // Ensure cleanup on unmount
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [pathname]); // Re-run when pathname changes

  // Check if device is low-end
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
    const hasLowMemory = (navigator.deviceMemory !== undefined && navigator.deviceMemory < 4) || (isMobile && window.innerWidth < 768);
    setIsLowEndDevice(hasLowMemory);
  }, []);

  // Initialize Vanta effect
  useEffect(() => {
    if (!threeJsLoaded || !vantaJsLoaded || !vantaRef.current || isLowEndDevice) return;

    // Always destroy any existing effect before creating a new one
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    // Small timeout to ensure DOM is fully ready
    const initTimer = setTimeout(() => {
      try {
        // @ts-ignore - VANTA is loaded from external script
        if (window.VANTA && window.VANTA.FOG) {
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xffffff,
            midtoneColor: 0x1258ff,
            lowlightColor: 0xa5a5d4,
            blurFactor: 0.34,
            speed: 4.80,
            zoom: 0.20
          });
          console.log("Vanta effect initialized", mountId);
        } else {
          console.warn("VANTA.FOG not available yet");
        }
      } catch (error) {
        console.error("Failed to initialize Vanta effect:", error);
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(initTimer);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [threeJsLoaded, vantaJsLoaded, isLowEndDevice, pathname, mountId]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect.current) {
        vantaEffect.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isLowEndDevice && (
        <>
          <Script 
            id={`three-js-script-${mountId}`}
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
            onLoad={() => {
              console.log("Three.js loaded", mountId);
              setThreeJsLoaded(true);
            }}
            strategy="afterInteractive"
          />
          <Script 
            id={`vanta-fog-script-${mountId}`}
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
            onLoad={() => {
              console.log("Vanta.js loaded", mountId);
              setVantaJsLoaded(true);
            }}
            strategy="afterInteractive"
            // Only load Vanta.js after Three.js is loaded
            data-deps={`three-js-script-${mountId}`}
          />
        </>
      )}
      
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-full h-full overflow-hidden rounded-xl"
        key={`vanta-container-${pathname}-${mountId}`} // Force remount on pathname change
      >
        {(isLowEndDevice || !threeJsLoaded || !vantaJsLoaded) && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#1258ff] to-[#a5a5d4]"></div>
        )}
        {children}
      </div>
    </>
  );
} 
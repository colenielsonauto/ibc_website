"use client";

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { usePathname, useRouter } from 'next/navigation';

// Add type declarations for the global window objects
declare global {
  interface Window {
    THREE?: any;
    p5?: any;
    VANTA?: {
      TOPOLOGY?: (options: any) => any;
    };
  }
}

interface VantaTopologyBackgroundProps {
  children: React.ReactNode;
}

export default function VantaTopologyBackground({ children }: VantaTopologyBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [p5Loaded, setP5Loaded] = useState(false);
  const [vantaJsLoaded, setVantaJsLoaded] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [mountId, setMountId] = useState(Date.now()); // Unique ID for each mount
  
  // Get current pathname to force remounting when path changes
  const pathname = usePathname();
  const router = useRouter();

  // Reset loaded states when component mounts
  useEffect(() => {
    // Force reset of loaded states on mount
    setP5Loaded(false);
    setVantaJsLoaded(false);
    setMountId(Date.now()); // Generate new mount ID
    
    // Ensure any existing effect is destroyed
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }
    
    // Check if scripts are already loaded in window
    if (typeof window !== 'undefined') {
      if (window.p5) {
        setP5Loaded(true);
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
    if (!p5Loaded || !vantaJsLoaded || !vantaRef.current || isLowEndDevice) return;

    // Always destroy any existing effect before creating a new one
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    // Small timeout to ensure DOM is fully ready
    const initTimer = setTimeout(() => {
      try {
        // @ts-ignore - VANTA is loaded from external script
        if (window.VANTA && window.VANTA.TOPOLOGY) {
          vantaEffect.current = window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x142c8e,
            backgroundColor: 0xcacfcf,
            points: 15,
            maxDistance: 20.00,
            spacing: 15.00,
            showDots: true,
            speed: 2.00
          });
          console.log("Vanta effect initialized", mountId);
        } else {
          console.warn("VANTA.TOPOLOGY not available yet");
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
  }, [p5Loaded, vantaJsLoaded, isLowEndDevice, pathname, mountId]);

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
            id={`p5-script-${mountId}`}
            src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"
            onLoad={() => {
              console.log("p5.js loaded", mountId);
              setP5Loaded(true);
            }}
            strategy="afterInteractive"
          />
          <Script 
            id={`vanta-topology-script-${mountId}`}
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
            onLoad={() => {
              console.log("Vanta.js loaded", mountId);
              setVantaJsLoaded(true);
            }}
            strategy="afterInteractive"
            // Only load Vanta.js after p5.js is loaded
            data-deps={`p5-script-${mountId}`}
          />
        </>
      )}
      
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-full h-full overflow-hidden rounded-xl"
        key={`vanta-container-${pathname}-${mountId}`} // Force remount on pathname change
      >
        {(isLowEndDevice || !p5Loaded || !vantaJsLoaded) && (
          <div className="absolute inset-0 bg-[#cacfcf]"></div>
        )}
        {children}
      </div>
    </>
  );
} 
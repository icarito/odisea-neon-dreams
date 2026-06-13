import { useState, useEffect } from 'react';

export type Platform = 'windows' | 'linux' | 'android' | 'ios' | 'macos' | 'unknown';

export const usePlatformDetect = (): Platform => {
  const [platform, setPlatform] = useState<Platform>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    
    if (/windows/.test(userAgent)) {
      setPlatform('windows');
    } else if (/android/.test(userAgent)) {
      setPlatform('android');
    } else if (/linux/.test(userAgent)) {
      setPlatform('linux');
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else if (/macintosh|mac os x/.test(userAgent)) {
      // Check for iPadOS (it often reports as Macintosh)
      if (navigator.maxTouchPoints > 0) {
        setPlatform('ios');
      } else {
        setPlatform('macos');
      }
    } else {
      setPlatform('unknown');
    }
  }, []);

  return platform;
};

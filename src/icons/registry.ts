import audioSvg from './audio.svg?raw';
import documentsSvg from './documents.svg?raw';
import downloadsSvg from './downloads.svg?raw';
import imagesSvg from './images.svg?raw';
import linkOffSvg from './link_off.svg?raw';
import menuSvg from './menu.svg?raw';
import notificationOffSvg from './notification_off.svg?raw';
import recentSvg from './recent.svg?raw';
import settingsSvg from './settings.svg?raw';
import videosSvg from './videos.svg?raw';
import wallpaperSvg from './wallpaper.svg?raw';

export type IconName = 'audio' | 'documents' | 'downloads' | 'images' | 'link_off' | 'menu' | 'notification_off' | 'recent' | 'settings' | 'videos' | 'wallpaper';

// Helper function to replace hardcoded fill colors with currentColor
function replaceFillWithCurrentColor(svg: string): string {
  // Replace common hardcoded fill colors with currentColor
  return svg
    .replace(/fill="#5F5E60"/g, 'fill="currentColor"')
    .replace(/fill="#161C27"/g, 'fill="currentColor"')
    .replace(/fill="[^"]*"/g, (match) => {
      // Only replace if it's a color value (not 'none' or 'currentColor')
      if (match.includes('none') || match.includes('currentColor')) {
        return match;
      }
      return 'fill="currentColor"';
    });
}

export const iconRegistry: Record<IconName, string> = {
  audio: replaceFillWithCurrentColor(audioSvg),
  documents: replaceFillWithCurrentColor(documentsSvg),
  downloads: replaceFillWithCurrentColor(downloadsSvg),
  images: replaceFillWithCurrentColor(imagesSvg),
  link_off: replaceFillWithCurrentColor(linkOffSvg),
  menu: replaceFillWithCurrentColor(menuSvg),
  notification_off: replaceFillWithCurrentColor(notificationOffSvg),
  recent: replaceFillWithCurrentColor(recentSvg),
  settings: replaceFillWithCurrentColor(settingsSvg),
  videos: replaceFillWithCurrentColor(videosSvg),
  wallpaper: replaceFillWithCurrentColor(wallpaperSvg),
};

export const iconNames = Object.keys(iconRegistry) as IconName[];




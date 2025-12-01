import linkOffSvg from './link_off.svg?raw';
import notificationOffSvg from './notification_off.svg?raw';
import settingsSvg from './settings.svg?raw';
import wallpaperSvg from './wallpaper.svg?raw';

export type IconName = 'link_off' | 'notification_off' | 'settings' | 'wallpaper';

export const iconRegistry: Record<IconName, string> = {
  link_off: linkOffSvg,
  notification_off: notificationOffSvg,
  settings: settingsSvg,
  wallpaper: wallpaperSvg,
};

export const iconNames = Object.keys(iconRegistry) as IconName[];




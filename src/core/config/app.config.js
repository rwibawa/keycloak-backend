import { logger } from './log.config';

export const appPort = process.env.APP_PORT || 3000;

export const initSplashScreen = () => {
  console.log(' _                   _             _         _                _                  _ ');
  console.log('| | _____ _   _  ___| | ___   __ _| | __    | |__   __ _  ___| | _____ _ __   __| |');
  console.log('| |/ / _ \\ | | |/ __| |/ _ \\ / _` | |/ /____| \'_ \\ / _` |/ __| |/ / _ \\ \'_ \\ / _` |');
  console.log('|   <  __/ |_| | (__| | (_) | (_| |   <_____| |_) | (_| | (__|   <  __/ | | | (_| |');
  console.log('|_|\\_\\___|\\__, |\\___|_|\\___/ \\__,_|_|\\_\\    |_.__/ \\__,_|\\___|_|\\_\\___|_| |_|\\__,_|');
  console.log('          |___/                                                                    ');
};

export const serverInitCallback = () => {
  logger.info(`Keycloak Backend Initialized on Port ${appPort}`);
  logger.info(`For a complete list of API services, visit: http://localhost:${appPort}/api/docs`);
  logger.info('---------------');
};

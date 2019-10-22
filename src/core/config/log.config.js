import winston from 'winston/lib/winston';

const { combine, timestamp, printf } = winston.format;

const customFormat = printf(info => {
  return `\n${info.timestamp} ${info.level}: ${info.message}`;
});

export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), customFormat),
  transports: [new winston.transports.Console()]
});


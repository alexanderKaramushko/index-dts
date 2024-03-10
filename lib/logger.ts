/* eslint-disable sort-keys */
import winston from 'winston';

winston.addColors({
  error: 'red',
  warn: 'orange',
  info: 'blue',
});

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 4,
};

export const logger = winston.createLogger({
  level: 'info',
  levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.prettyPrint(),
  ),
  transports: [],
});

if (process.env.NODE_ENV === 'develop') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
} else {
  logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }));
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

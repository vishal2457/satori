// import {transports, createLogger, format} from "winston";
// const { timestamp, prettyPrint, json } = format;

// const logger = createLogger({
//   level: 'info',
//   format: format.combine(
//     json(),
//     prettyPrint(),
//     timestamp()
//   ),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     new transports.File({ filename: './logs/error.log', level: 'error' }),
//     new transports.File({ filename: './logs/combined.log' }),
//   ],
// });


// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new transports.Console({
//     format: format.simple(),
//   }));
// }

// export default logger
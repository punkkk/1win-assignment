export const config = {
  rabbit: {
    PROTOCOL: 'amqp',
    HOST: process.env.RABBIT_HOST || 'localhost',
    PORT: 5672,
    ODDS_QUEUE_NAME: 'odds',
  },
};

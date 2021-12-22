module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad7b0198a15fdfb14a3c22cd22ce9327'),
  },
});

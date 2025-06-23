module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/aeronauts',
        permanent: false, 
      },
    ];
  },
};

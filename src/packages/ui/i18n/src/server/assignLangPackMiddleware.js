const assignI18nPackMiddleware = pack => (req, res, next) => {
  res.locals.i18n = {
    lang: 'km',
    pack,
  };

  next();
};

export default assignI18nPackMiddleware;

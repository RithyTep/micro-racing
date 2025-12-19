const assignI18nPackMiddleware = pack => (req, res, next) => {
  res.locals.i18n = {
    lang: req.acceptsLanguages('km', 'pl', 'de', 'en') || 'km',
    pack,
  };

  next();
};

export default assignI18nPackMiddleware;

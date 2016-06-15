module.exports = function(defaults) {
  defaults = defaults || {};
  var paramDefaults = defaults.params;
  var queryDefaults = defaults.query;
  var bodyDefaults = defaults.body;

  return function(req, res, next) {
    if (paramDefaults) {
      Object.keys(paramDefaults).forEach(function(key) {
        if (req.params[key] === undefined) {
          req.params[key] = paramDefaults[key];
        }
      });
    }

    if (queryDefaults) {
      Object.keys(queryDefaults).forEach(function(key) {
        if (req.query[key] === undefined) {
          req.query[key] = queryDefaults[key];
        }
      });
    }

    if (bodyDefaults) {
      Object.keys(bodyDefaults).forEach(function(key) {
        if (req.body[key] === undefined) {
          req.body[key] = bodyDefaults[key];
        }   
      });
    }

    next();
  };
};

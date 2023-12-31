const authMiddleware = {
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect("/auth/login");
  },

  isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.redirect("/products");
  },

  isAdmin(req, res, next) {
    req.Admin = function () {
      return req.user.role === "admin";
    };
    if (req.Admin()) {
      return next();
    }

    return res.redirect("/products");
  },

  isUser(req, res, next) {
    req.isUser = function () {
      return req.user.role === "user";
    };
    if (req.isUser()) {
      return next();
    }

    return res.redirect("/products");
  },
};

export default authMiddleware;

const logout = (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refresh) res.status(204).json({ message: "logged out" });

  res.clearCookie("refresh", { httpOnly: true });
  res.status(204).json({ message: "logged out" });
};

module.exports = logout;

import AuthService from "./auth/auth.service.js";

const authService = new AuthService();

const routes = (app) => {
  // Register a new user
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { walletAddress } = req.body;
      const user = await authService.registerUser(walletAddress);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Log in a user
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { walletAddress } = req.body;
      const token = await authService.loginUser(walletAddress);
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
};

export default routes;

import express, { json, request, response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.post(
  "/token/:code",
  async (req: express.Request, res: express.Response) => {
    const { code } = req.params;
    try {
      const response = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          code,
          client_secret: "0ca626aa08fe472ab5dbb089d47e906c0135d7df",
          redirect_url: "http://localhost:3000/login",
          client_id: "1167affef98c6e1cad24",
        }
      );

      // JSON.parse(response.data);

      return res.status(200).json({
        response: response.data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error,
      });
    }
  }
);

app.post(
  "/token/authorized/",
  async (req: express.Request, res: express.Response) => {
    const { code } = req.params;
    try {
      const response = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          code,
          client_secret: "0ca626aa08fe472ab5dbb089d47e906c0135d7df",
          redirect_url: "http://localhost:3000/login",
          client_id: "1167affef98c6e1cad24",
        }
      );

      // JSON.parse(response.data);

      return res.status(200).json({
        response: response.data,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error,
      });
    }
  }
);

app.listen(3333, () => {
  console.log("API rodando");
});

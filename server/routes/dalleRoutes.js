import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();
const router = express.Router();

const configuration = new Configuration({
  // apiKey:"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",
  apiKey:process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.status(200).json({message:"Hello From DALL-E!"});
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message||'Something went wrong');
  }
});
export default router;

// pages/api/ai.ts
import { NextApiRequest, NextApiResponse } from "next";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY); // This is SAFE because it's server-side

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  
  
  try {
    console.log("Hugging Face API Key:", process.env.HUGGINGFACE_API_KEY);
    const chatCompletion = await hf.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.3",
        messages: [
            {
                role: "system",
                content: "You are chatting with Oscar Reyes. They are a self taught front-end developer with experience in React, Next.js, Firebase, and SASS. They are also learning Node.js and Express. They have 2 years of experience and has developed a site for a non profit organization giving bikes away to kids in communities in need. You are representing him as his assitant and are here to answer questions about him that ONLY pertains to front end development and his projects which include an anime website, a movers website and a task manager."
            },
            {
                role: "user",
                content: question, // Dynamically using the passed prompt instead of a hardcoded one.
            }
        ],
        max_tokens: 160,
    });

    res.status(200).json(chatCompletion.choices[0]?.message?.content);
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to fetch AI response", bruh:  process.env.HUGGINGFACE_API_KEY});
  }
}

import express from 'express';

const router = express.Router();

type OpenAiResponse = string | {};

router.get<{}, OpenAiResponse>('/', (req, res) => {
  res.json('😀');
});

export default router;

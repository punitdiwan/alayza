const { DO_SPACE_KEY,DO_SPACE_SECRET } = process.env;

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ secretKey: DO_SPACE_KEY, secretId: DO_SPACE_SECRET });
  }
}

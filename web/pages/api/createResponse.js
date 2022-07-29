

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json({ message: 'Response submitted' });
  } else {
    res.status(405).json({
      message: 'Method not allowed',
    });
  }
}

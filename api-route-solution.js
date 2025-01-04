```javascript
//pages/api/profile-solution.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process the request (add your actual logic here)
    const { name } = req.body;
    console.log('Request body:', req.body);
    if (name) {
      res.status(200).json({ name: name });
    } else {
      res.status(400).json({ error: 'Missing name in request body' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```
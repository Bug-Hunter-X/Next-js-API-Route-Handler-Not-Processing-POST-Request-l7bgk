```javascript
//pages/api/profile.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    //Process the request
    res.status(200).json({ name: 'John Doe' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```
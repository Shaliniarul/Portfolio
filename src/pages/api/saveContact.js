import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    const submission = {
      name,
      email,
      subject,
      message,
      date: new Date().toISOString()
    };
    const filePath = path.join(process.cwd(), 'src', 'pages', 'api', 'contacts.txt');
    try {
      fs.appendFileSync(filePath, JSON.stringify(submission) + '\n');
      res.status(200).json({ message: 'Saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving details' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

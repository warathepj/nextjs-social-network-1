import { useState } from 'react';

export default function TestConnection() {
  const [status, setStatus] = useState('');
  const [comments, setComments] = useState([]);

  const testConnection = async () => {
    try {
      const response = await fetch('/api/test-connection');
      const data = await response.json();
      setStatus(data.message || data.error);
      setComments(data.comments || []);
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Test MongoDB Atlas Connection</h1>
      <button onClick={testConnection}>Test Connection and Fetch Comments</button>
      <p>{status}</p>
      <pre>
        {comments.map(comment => comment.name).join('\n')}
      </pre>
    </div>
  );
}
   // pages/index.js
   "use client"
   import { useEffect, useState } from 'react';

   export default function Home() {
     const [comments, setComments] = useState([]);

     useEffect(() => {
       async function fetchComments() {
         const res = await fetch('/api/comments');
         const data = await res.json();
         setComments(data);
       }

       fetchComments();
     }, []);

     return (
       <div>
         <h1>Comments</h1>
         <ul>
           {comments.map((comment, index) => (
             <li key={index}>{comment.name}</li>
           ))}
         </ul>
       </div>
     );
   }
   // pages/index.js
   "use client"
   import { useEffect, useState } from 'react';

   export default function Home() {
     const [names, setNames] = useState([]);

     useEffect(() => {
       async function fetchNames() {
         const res = await fetch('/api/names');
         const data = await res.json();
         setNames(data);
       }

       fetchNames();
     }, []);

     return (
       <div>
         <h1>names</h1>
         <ul>
           {names.map((name, index) => (
             <li key={index}>{name.name}</li>
           ))}
         </ul>
       </div>
     );
   }
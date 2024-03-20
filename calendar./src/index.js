import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvide } from "@supabase/auth-helpers-react"
// import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
const supabase = createClient(
  "https://laklwtfakxsehgfpxrzj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxha2x3dGZha3hzZWhnZnB4cnpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MzU2NjgsImV4cCI6MjAyNjQxMTY2OH0.Zt4SuvkBg3Th0toUNs2ONWk5MzPnpQnXxH3Vc_vIa38"
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvide supabaseClient={supabase}>
      <App />
    </SessionContextProvide>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

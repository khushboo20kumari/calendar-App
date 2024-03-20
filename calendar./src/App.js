import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import './App.css';
function App() {
  const session = useSession()//token
  const supaBase = useSupabaseClient()//talk to supabase

  async function googleSignIn(){

    await supaBase.auth.signInWithOAuth({
      provider:"google",
      options:{
        
      }

    })
  } 
  return (
    <div className="App">
      {session ?
        <>
         <h1>hey there {session.user.email}</h1>
        </>
        :
        <>
        <button onClick={()=>googleSignIn()}>Sign in with google</button>
        </>
      }


    </div>
  );
}

export default App;

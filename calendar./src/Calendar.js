// import {useSession,useSupabaseClient} from "@supabase/Authu-helper-react";
// function CalendarApp(){
    
//     const session=useSession();
//     const supabase=useSupabaseClient()

//     async function googleSignIn(){
//         await supabase.auth.signInwithOAuth({
//             provider:"google",
//             Option:{ 
//                 scopes:"https://www.googleapis.com/auth/calendar"
                 
//             }

             
//         });
//         if (error){
//             alert("Error loggging in to Googlw a provider with Supabase")
//             console.log(error)
//         }
//     }
//     async function signOut(){
//         await supabase.auth.signOut()
//     }
//     console.log("sss")
//     return(
//         <>
//         {session ? 
//         <>
//            <h1>may there{session.user.email}</h1>

//         </>
//         : 
//         <>
//           <button onClick={()=>googleSignIn()}>Sign with Google</button>
//         </>
//         }
          
//         </>
//     )
// }
// export default CalendarApp;
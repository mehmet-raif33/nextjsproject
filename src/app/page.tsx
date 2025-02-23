'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { maSupabase } from "@/supabase/supabase.config";


export default function Home() {

  const lestLoginWithGoogle = async () => {
    maSupabase.auth.signInWithOAuth({ 
      provider: 'google' ,
      options: {
        redirectTo: 'https://localhost:3000/profile'
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 items-center"
              >        
              <h2 className="text-4xl font-bold text-center"> 
                Welcome to place that people love to be here!!
              </h2>
              <p className="text-lg text-center font-light">
                People love to be here because we offer them all goergeous things that they need. Freedom or control, you can choose. You can sign in with Google in few seconds. Let's dive in.
              </p>
              
              <div className="px-6 sm:px-0 max-w-sm">
                <button 
                onClick={lestLoginWithGoogle}
                type="button" 
                className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                  <svg 
                  className="mr-2 -ml-1 w-4 h-4" 
                  aria-hidden="true" 
                  focusable="false" 
                  data-prefix="fab" 
                  data-icon="google" 
                  role="img" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 488 512">
                    <path fill="currentColor" 
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                    Sign up with Google
                    <div>
                  </div>
                </button>
              </div>
            </motion.div>

          </main>        

      </div>
  );
}

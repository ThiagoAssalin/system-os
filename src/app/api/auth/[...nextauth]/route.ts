import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import api from "@/services/axiosClient";

const NextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                username:{label: 'username', type:'text'},
                password:{label:'password', type:'password'}
            },
            async authorize(credentials,req){
                const response = await api.post("/auth/login", {
                    username: credentials?.username,
                    password: credentials?.password,
                  })
                  const user = await response

                  if(user && response){
                    return user
                  }

            },
        })
        
    ], 
    pages:{signIn:'/login'}
}


const handler = NextAuth(NextAuthOptions)

export { handler as GET, handler as POST }
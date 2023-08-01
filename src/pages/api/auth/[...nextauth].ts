import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/services/axiosClient";

export default NextAuth({
  providers: [
    CredentialsProvider({
      jwt:{
        signinKey:process.env.JWT_SIGNING_PRIVATE_KEY,
      },
      secret: process.env.NEXT_AUTH_SECRET,
      session:{
        jwt:true,
        maxAge: 30 * 24 * 60 * 60,
      },
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          
          const result = await api.post("/auth/login", {
            username: credentials.username,
            password: credentials.password,
          });
          
          const { token, user } = result.data.logged;
          const {id, username} = user

          if(!token || !id || !username){
            return null
          }else{
            return{
              token,
              id,
              name:username
            }
          }
          

          return null;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
});

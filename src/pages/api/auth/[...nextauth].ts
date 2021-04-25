import NextAuth from "next-auth";
import { query as q } from "faunadb";
import Providers from "next-auth/providers";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user"
    }),
  ],

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      // caso estaja tudo correto retorne true
      try {
        await fauna.query(
          // Se nao exister um usuario que bate com o usuario informado
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),

            // cria um novo usuario dentro da colletions do fauna
            q.Create(q.Collection("users"), { data: { email } }),
            // se ja existe, devolve o usuario
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        );
        return true;
      } catch {
        // se nao retorne false
        return false;
      }
    },
  },
});

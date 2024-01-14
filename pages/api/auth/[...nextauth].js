import NextAuth from "next-auth"
import GetHubProviders from "next-auth/providers/github"


export default NextAuth({
    providers: [
        GetHubProviders({
            clientId: '025ac2b6125de64fb6af',
            clientSecret: 'a8dc65b71653046f875b424ca2daf9cdfaa3dbf5',
        })
    ]
})
export const oktaConfig = {
    clientId: '0oa8f15cv9l83PIIX5d7',
    issuer: 'https://dev-73173471.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
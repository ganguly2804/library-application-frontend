export const oktaConfig = {
    clientId: '0oaj2kz0pnhoTmBfu5d7',
    issuer: 'https://dev-13030549.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
import { pkce } from '@okta/okta-auth-js';
import { environment } from '../environments/environment';

export default {
  oidc: {
    clientId: environment.clientID,
    issuer: environment.issuer,
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email', 'offline_access'],
    // testing: {
    //   disableHttpsCheck: false
    // }
    pkce: true
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/health',
  },
};

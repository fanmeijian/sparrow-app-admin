import { KeycloakOnLoad } from "keycloak-js";

// const SPARROW_BASE='https://api2.linkair-tech.cn/sparrow-permission-service'
const SPARROW_BASE = 'http://localhost:8080'
const API_BASE = 'http://localhost:8081/dengbo-service'
const login: KeycloakOnLoad = 'login-required'
export const environment = {
  production: false,
  apiBase: `${API_BASE}`,
  pemBase: `${SPARROW_BASE}`,
  keycloak: {
    authServerUrl: 'https://keycloak.linkair-tech.cn',
    realm: 'dengbo',
    clientId: 'dengbo-web',
    login: login
  },
};

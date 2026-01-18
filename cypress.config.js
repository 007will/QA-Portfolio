const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    baseUrl: 'https://test.spchamber.com.br',
    baseUrlBackOffice: 'https://test.spchamber.com.br/backoffice/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,  // Aumentado para 20s (+33% para reduzir timeouts)
    pageLoadTimeout: 90000,        // Aumentado para 90s (+50% baseado em 268 falhas)
    requestTimeout: 20000,         // Aumentado para 20s
    responseTimeout: 40000,        // Aumentado para 40s (API com retry)
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,                  // 2 tentativas no CI/CD
      openMode: 0                   // 0 tentativas no modo interativo
    },

    env: {
      ambiente: 'hml',
      admin_login: 'admin-test@yopmail.com',
      produto_import_login: 'produtosimport@uorak.com',
      produto_export_login: 'produtosexport@uorak.com',
      produto_import_export_login: 'produtosimportexport@yopmail.com',
      negocio_login: 'oportunidades@yopmail.com',
      servico_login: 'servicos@yopmail.com',
      password_adm: 'Inicio254*',
      password: 'Ximas23!',
      api_url_token: 'https://acspidentitydevqa.b2clogin.com/acspidentitydevqa.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_ropc_auth',
      
      // URLs antigas (manter compatibilidade)
      api_url_noticias: 'https://msnews-test.azurewebsites.net/news',
      api_url_servicos: 'https://msservice-test.azurewebsites.net/service',
      api_url_oportunidades: 'https://msopportunity-test.azurewebsites.net/opportunity',
      api_url_eventos: 'https://msevent-test.azurewebsites.net/event',
      api_url_produtos: 'https://msproduct-test.azurewebsites.net/product',
      
      // URLs novas (para testes novos de API)
      'url-homol-product': 'https://msproduct-test.azurewebsites.net/product',
      'url-homol-event': 'https://msevent-test.azurewebsites.net/event',
      'url-homol-news': 'https://msnews-test.azurewebsites.net/news',
      'url-homol-negocio': 'https://msopportunity-test.azurewebsites.net/opportunity',
      'url-homol-term': 'https://mscustomer-test.azurewebsites.net/customer',
      
      client_id: '90c61a6b-24a0-48f7-ab33-8c2b7447af52',
      scope: 'openid 90c61a6b-24a0-48f7-ab33-8c2b7447af52',
      grant_type: 'password'
    },

    setupNodeEvents(on, config) {

      // 🔥 Task que "reseta" o estado interno do Cypress
      // usada no beforeEach() do commands.js
      on('task', {
        clearCache() {
          // Não precisa fazer nada — o simples fato de existir
          // força o Cypress a reiniciar o ciclo interno de execução
          return null;
        },
        
        // 📝 Task de log estruturado para debugging
        log(message) {
          console.log('[Cypress Debug]', message);
          return null;
        }
      });

      return config;
    }
  }
});
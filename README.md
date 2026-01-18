# 🎯 QA Engineer Portfolio - José Willams

<div align="center">

![QA Engineer](https://img.shields.io/badge/QA-Engineer-blue?style=for-the-badge)
![Test Automation](https://img.shields.io/badge/Test-Automation-green?style=for-the-badge)
![API Testing](https://img.shields.io/badge/API-Testing-orange?style=for-the-badge)
![CI/CD](https://img.shields.io/badge/CI%2FCD-DevOps-red?style=for-the-badge)

**Portfólio completo de projetos e habilidades em Quality Assurance**

[📊 Ver Portfolio Completo](QA_PORTFOLIO_REPORT.md) • [🐛 Bug Reports](#bug-reports) • [📝 Documentação](#documentação)

</div>

---

## 👨‍💻 Sobre Mim

Sou **José Willams**, QA Engineer especializado em automação de testes, com forte experiência em:

- 🤖 **Automação E2E** com Cypress, Playwright e Selenium
- 🧪 **Testes de API REST** com Insomnia, Postman e Swagger
- 🔧 **CI/CD** com Azure DevOps, GitHub Actions e GitLab CI
- 📊 **Análise e Qualidade** com foco em métricas e melhoria contínua
- 📝 **Documentação Técnica** detalhada e profissional

---

## 🚀 Destaques do Portfolio

### 📈 Métricas de Impacto

```
✅ 95% de cobertura de testes automatizados
🐛 10+ bugs críticos identificados antes da produção
⏱️ 70% de redução no tempo de testes
📊 80+ casos de teste de API documentados
📝 10+ documentos técnicos produzidos
```

### 🛠️ Stack Tecnológica

<div align="center">

| Automação | API Testing | CI/CD | Reporting |
|-----------|-------------|-------|-----------|
| Cypress | Postman | Azure DevOps | Mochawesome |
| Playwright | Insomnia | GitHub Actions | Allure |
| Selenium | Swagger | GitLab CI | Cypress Dashboard |

</div>

---

## 📂 Estrutura do Repositório

```
qa-portfolio/
│
├── 📄 QA_PORTFOLIO_REPORT.md          # Portfolio completo e detalhado
│
├── 📁 cypress/                        # Framework de testes E2E
│   ├── e2e/
│   │   ├── api/                      # Testes de API automatizados
│   │   └── Backoffice/               # Testes de interface
│   ├── fixtures/                     # Dados de teste
│   ├── support/
│   │   ├── commands/                 # Comandos customizados
│   │   ├── pages/                    # Page Objects
│   │   └── factories/                # Test Data Factories
│   └── reports/                      # Relatórios de execução
│
├── 📁 docs/                          # Documentação técnica
│   ├── RELATORIO_ANALISE_TESTES.md
│   ├── CHECKLIST_IMPLEMENTACAO.md
│   ├── ARQUITETURA_PROPOSTA.md
│   └── GUIA_RAPIDO_MIGRACAO.md
│
└── 📄 azure-pipelines.yml            # Pipeline CI/CD
```

---

## 🎓 Competências Técnicas

### **Hard Skills**

<table>
<tr>
<td width="50%">

**Test Automation**
- ✅ Cypress (JavaScript/TypeScript)
- ✅ Playwright (Multi-browser)
- ✅ Selenium WebDriver
- ✅ Page Object Model
- ✅ Data-Driven Testing
- ✅ BDD/Gherkin

</td>
<td width="50%">

**API Testing**
- ✅ REST API Testing
- ✅ OAuth2 & Authentication
- ✅ GraphQL
- ✅ Postman/Insomnia
- ✅ Swagger/OpenAPI
- ✅ JSON Schema Validation

</td>
</tr>
<tr>
<td>

**CI/CD & DevOps**
- ✅ Azure Pipelines
- ✅ GitHub Actions
- ✅ GitLab CI
- ✅ Docker
- ✅ Git Version Control
- ✅ YAML Configuration

</td>
<td>

**Programming & Scripting**
- ✅ JavaScript/TypeScript
- ✅ Python
- ✅ Java (básico)
- ✅ Node.js
- ✅ SQL
- ✅ Bash/Shell

</td>
</tr>
</table>

### **Soft Skills**

- 🎯 Análise crítica de requisitos
- 🐛 Identificação proativa de bugs
- 📝 Documentação técnica detalhada
- 💬 Comunicação efetiva com stakeholders
- 🔄 Melhoria contínua de processos
- 👥 Trabalho em equipe ágil

---

## 📊 Projetos em Destaque

### 🏢 Projeto 1: Portal Empresarial (Atual)

**Contexto:** Portal com múltiplos módulos e integração complexa de APIs

**Minhas Entregas:**
- ✅ Automação de ~80 endpoints de API REST
- ✅ Implementação de testes E2E com Cypress
- ✅ Configuração de pipeline CI/CD completo
- ✅ 95% de cobertura de testes automatizados
- ✅ Identificação e documentação de 10+ bugs críticos

**Tecnologias:** Cypress, Insomnia, Azure DevOps, Mochawesome

**Resultados:**
- 📉 Redução de 70% no tempo de execução de testes
- 🐛 10+ bugs críticos identificados antes da produção
- 💰 Economia significativa de custos

[📄 Ver detalhes completos no Portfolio](QA_PORTFOLIO_REPORT.md)

---

## 🐛 Bug Reports

### Exemplos de Bugs Identificados

<details>
<summary><b>🔴 Bug #1: Validação Incorreta de Tipo de Dados</b></summary>

**Severidade:** Alta  
**Módulo:** API - Eventos

**Descrição:**  
API rejeitava payloads válidos devido a validação de tipo incorreta no campo `entity`.

**Evidência:**
```json
// ❌ Rejeitado
{ "entity": "EMPRESA_X" }

// ✅ Solução
{ "entity": ["EMPRESA_X"] }
```

**Impacto:** Bloqueio na edição de eventos  
**Status:** Reportado e corrigido

</details>

<details>
<summary><b>🟡 Bug #2: Inconsistência na Massa de Dados</b></summary>

**Severidade:** Média  
**Módulo:** API - Eventos

**Descrição:**  
EventId=1 não existente ou inativo causando falhas em múltiplos endpoints.

**Ação:** Criada estratégia de massa de dados válida para testes

</details>

---

## 📝 Documentação

Este repositório contém documentação técnica completa:

| Documento | Descrição |
|-----------|-----------|
| [QA_PORTFOLIO_REPORT.md](QA_PORTFOLIO_REPORT.md) | Portfolio completo e detalhado |
| [RELATORIO_ANALISE_TESTES](RELATORIO_ANALISE_TESTES_15_01_2026.md) | Análise de cobertura e gaps |
| [CHECKLIST_IMPLEMENTACAO](CHECKLIST_IMPLEMENTACAO.md) | Guia de setup e validação |
| [ARQUITETURA_PROPOSTA](ARQUITETURA_PROPOSTA.md) | Padrões e boas práticas |
| [GUIA_RAPIDO_MIGRACAO](GUIA_RAPIDO_MIGRACAO.md) | Guia de migração de testes |

---

## 🎓 Formação

**Graduação**
- 🎓 Análise e Desenvolvimento de Sistemas - UDF

**Certificações e Cursos**
- ✅ Cypress Skills - Fernando Papito
- ✅ Testando Componentes com Cypress - Fernando Papito
- ✅ Preparatório CTFL (ISTQB/BSTQB) - Leonardo Carvalho
- ✅ JavaScript Avançado - Eduardo Mafra
- ✅ Java OOP - Jackson Pires
- ✅ Algoritmos e Lógica - Nélio Alves

---

## 💼 Experiência Profissional

### Aw4 Engenharia - QE Automação (02/2024 - Atual)
- Automação de testes E2E e API com Cypress/Playwright
- Implementação de CI/CD no Azure DevOps
- 95% de cobertura de testes automatizados

### Aw4 Engenharia - QA Analyst (01/2022 - 02/2024)
- Testes funcionais e regressivos
- Redução de 40% de bugs em produção
- Documentação de processos de QA

### LojaHost Soluções Web - QA/QE (2014 - 2023)
- Ciclo completo de qualidade de sistemas web
- Testes funcionais, regressivos e exploratórios
- Desenvolvimento e validação de soluções

---

## 🚀 Como Executar os Testes

### Pré-requisitos
```bash
Node.js 18+ instalado
npm ou yarn
```

### Instalação
```bash
# Clonar repositório
git clone https://github.com/007will/qa-portfolio.git

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp cypress.env.example.json cypress.env.json
```

### Execução
```bash
# Executar todos os testes
npm test

# Executar testes de API
npm run test:api

# Executar testes E2E
npm run test:e2e

# Abrir Cypress em modo interativo
npm run cy:open
```

---

## 📊 Métricas e Relatórios

Os relatórios de execução são gerados automaticamente em:
- `cypress/reports/` - Relatórios Mochawesome (HTML/JSON)
- `cypress/screenshots/` - Screenshots de falhas
- `cypress/videos/` - Gravações das execuções

---

## 📞 Contato

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-007will-black?style=for-the-badge&logo=github)](https://github.com/007will)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/seu-perfil)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:seu-email@example.com)

**💼 Aberto a novas oportunidades em Quality Assurance**

</div>

---

## 📄 Licença

Este portfolio é disponibilizado para fins de demonstração profissional.

---

<div align="center">

**Desenvolvido por José Willams**  
QA Engineer | Test Automation Specialist

⭐ Se este portfolio foi útil, considere dar uma estrela!

</div>

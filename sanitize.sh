#!/bin/bash
# Script para sanitizar dados sensíveis no portfolio público

echo "🔒 Sanitizando dados sensíveis..."

# 1. Atualizar package.json
cat > package.json << 'EOF'
{
  "name": "business-directory-qa-portfolio",
  "version": "1.0.0",
  "description": "Quality Analyst Portfolio - Test Analysis & Documentation",
  "repository": {
    "type": "git",
    "url": "https://github.com/007will/QA-Portfolio.git"
  },
  "license": "ISC",
  "author": "José Willams",
  "type": "commonjs",
  "main": "index.js",
  "keywords": ["qa", "testing", "quality-assurance", "api-testing", "documentation"],
  "scripts": {
    "test": "echo 'Portfolio project - no tests configured'",
    "docs": "echo 'See README.md for documentation'"
  }
}
EOF

# 2. Substituir dados sensíveis no QA_PORTFOLIO_REPORT.md
sed -i 's/SPCC/EMPRESA_X/g' QA_PORTFOLIO_REPORT.md
sed -i 's/CECIEx/EMPRESA_Y/g' QA_PORTFOLIO_REPORT.md
sed -i 's/acsp-comex/company-org/g' QA_PORTFOLIO_REPORT.md
sed -i 's/diretorio_automation/business-directory/g' QA_PORTFOLIO_REPORT.md
sed -i 's/renome@live\.com/contact@example.com/g' QA_PORTFOLIO_REPORT.md
sed -i 's/Marcílio Borges/José Willams/g' QA_PORTFOLIO_REPORT.md

# 3. Substituir dados sensíveis no README.md
sed -i 's/SPCC/EMPRESA_X/g' README.md
sed -i 's/CECIEx/EMPRESA_Y/g' README.md
sed -i 's/acsp-comex/company-org/g' README.md
sed -i 's/diretorio_automation/business-directory/g' README.md
sed -i 's/renome@live\.com/contact@example.com/g' README.md
sed -i 's/Marcílio Borges/José Willams/g' README.md

echo "✅ Sanitização concluída!"

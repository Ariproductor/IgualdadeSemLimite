# 🌱 Igualdade Sem Limite — Oportunidades e Carreira

> Conectando mulheres às melhores oportunidades do mercado de trabalho brasileiro.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-purple?style=flat-square)

---

## 📖 Sobre o Projeto

**Placeholder** é uma plataforma web voltada para o empoderamento feminino no mercado de trabalho. O projeto reúne em uma única página:

- 📰 **Notícias** relevantes para a carreira feminina
- 💼 **Vagas de emprego** filtráveis por estado, cidade, tipo e área
- 🎓 **Cursos de capacitação** gratuitos e pagos
- 🤝 **Informações institucionais** sobre a missão da plataforma

O objetivo é diminuir a desigualdade de gênero no mercado corporativo, criando uma ponte acolhedora entre mulheres talentosas e empresas que valorizam a diversidade.

---

## ✨ Funcionalidades

- **Carrossel de Notícias** com navegação por setas, scroll suave e ocultação de scrollbar nativa
- **Filtro de Vagas** com selects encadeados (estado → cidade) e filtragem em tempo real por tipo e área
- **Menu responsivo** com hamburguer para mobile
- **Cards de Cursos** com badge de gratuito/pago e efeito hover
- **Seção "Sobre Nós"** com estatísticas de impacto
- Layout totalmente **responsivo** (mobile-first)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **Font Awesome 6** (via CDN) | Ícones |
| **Google Fonts — Poppins** | Tipografia |
| **JavaScript Vanilla** | Interatividade, filtros e renderização dinâmica |

> ⚠️ O projeto não utiliza frameworks JS nem bundlers. Toda a lógica roda no browser via `<script>` direto no HTML.

---

## 🚀 Como Rodar o Projeto

Por ser um projeto estático (HTML puro), não há necessidade de instalação ou servidor Node.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/placeholder.git
   ```

2. **Acesse a pasta:**
   ```bash
   cd placeholder
   ```

3. **Abra o arquivo no navegador:**
   ```bash
   # Opção 1: abrir direto pelo explorador de arquivos
   # Opção 2: usar a extensão Live Server no VS Code
   # Opção 3: via terminal (macOS)
   open index.html
   ```

---

## 📁 Estrutura do Projeto

```
placeholder/
└── index.html      # Toda a aplicação (HTML + CSS customizado + JS)
```

> Por enquanto o projeto é um arquivo único. Futuras versões poderão separar os arquivos em `/css`, `/js` e `/assets`.

---

## 🗂️ Dados

Os dados de vagas, notícias e localidades são **simulados (mock)** via arrays JavaScript dentro do próprio `index.html`. Não há integração com backend ou banco de dados nesta versão.

Para substituir por dados reais, edite os arrays no bloco `// --- Dados Simulados (Mock) ---` do script:

```js
const jobsData = [ /* suas vagas aqui */ ];
const newsData = [ /* suas notícias aqui */ ];
const locationsData = { /* seus estados e cidades aqui */ };
```

---

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| Cor primária | `#9333ea` (Purple 600) |
| Cor secundária | `#db2777` (Pink 600) |
| Fundo claro | `#fdf4ff` (Fuchsia 50) |
| Fonte | Poppins (300, 400, 500, 600, 700) |

---

## 🔮 Próximos Passos (Roadmap)

- [ ] Integração com API de vagas real
- [ ] Página de detalhes de cada vaga
- [ ] Sistema de cadastro e login para candidatas
- [ ] Painel para empresas publicarem vagas
- [ ] Barra de busca por palavras-chave
- [ ] Paginação na listagem de vagas
- [ ] Modo escuro

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona minha feature'`)
4. Faça o push (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 para inspirar mulheres a ocuparem seus espaços.
</p>

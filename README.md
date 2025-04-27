
# 📄 Conversor de Movimentações Financeiras

Este projeto foi desenvolvido para **automatizar a leitura, tratamento e conversão de arquivos de movimentações financeiras**.

Ele lê arquivos `.txt` da pasta `entrada/`, formata o conteúdo (limpa linhas vazias, remove espaços e transforma tudo em **caixa alta**), e gera novos arquivos tratados na pasta `saida/`.

---

## ✨ Funcionalidades

- 📥 Ler múltiplos arquivos `.txt` da pasta `entrada/`
- 🧹 Limpar e formatar o conteúdo:
  - Remove espaços em branco
  - Remove linhas vazias
  - Converte todo texto para **maiúsculo**
- 📤 Gerar arquivos na pasta `saida/` com o sufixo `_tratado` no nome
- ✅ Cria a pasta de saída automaticamente se não existir
- 🛡️ Tratamento de erros para garantir estabilidade

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- Módulos nativos:
  - `fs/promises`
  - `path`

---

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/conversor-movimentacao-financeira.git
```

2. Navegue até o diretório do projeto:

```bash
cd conversor-movimentacao-financeira
```

3. Instale as dependências:

> Obs: Este projeto usa apenas módulos nativos do Node.js, não há dependências externas.

4. Organize os arquivos:

- Coloque seus arquivos `.txt` na pasta `entrada/`
- Certifique-se de que os arquivos contenham uma movimentação por linha

5. Execute o script:

```bash
node main.js
```

6. Verifique o resultado:

- Os arquivos tratados estarão na pasta `saida/`, com o sufixo `_tratado.txt`.

---

## 📂 Estrutura de Pastas

```
conversor-movimentacao-financeira/
├── entrada/       # Pasta com os arquivos originais (.txt)
├── saida/         # Pasta onde os arquivos tratados serão salvos
└── main.js        # Código-fonte principal
```

---

## 📢 Observações

- Certifique-se de que os arquivos de entrada estejam codificados em UTF-8.
- O script ignora arquivos que não terminam com `.txt`.
- Em caso de erro, o sistema irá capturar e exibir a mensagem sem interromper bruscamente a execução.

---

## 🧑‍💻 Autor

Desenvolvido por **Guilherme Petrus - Desenvolvedor de Software**.

---

# 🏆 Qualidade e eficiência!

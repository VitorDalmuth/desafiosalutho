# Calculadora de Menor Número Divisível

Este repositório contém uma aplicação desenvolvida em React para a interface e Django para o back-end, que calcula o menor número divisível por um intervalo de números fornecido pelo usuário.

## Requisitos
- Node.js (para executar a aplicação React)
- Python e Django (para executar o servidor de API)

## Como configurar e executar a aplicação

### 1. Configurando o Back-end (Django)
1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone <url_do_repositorio>
   cd <nome_do_repositorio>
   ```

2. Navegue para a pasta do servidor Django:
   ```bash
   cd <servidor_django>
   ```

3. Crie um ambiente virtual:
   ```bash
   python -m venv env
   env\Scripts\activate   
   ```

4. Inicie o servidor Django:
   ```bash
   python manage.py runserver
   ```
   O servidor será iniciado em `http://127.0.0.1:8000/`.

### 2. Configurando o Front-end (React)
1. Navegue para a pasta da aplicação React:
   ```bash
   cd <../pasta_react>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação React:
   ```bash
   npm start
   ```
   A aplicação React será iniciada em `http://localhost:3000/`.

## Como usar a aplicação
1. Abra a interface React no navegador em `http://localhost:3000/`.
2. Insira os valores de `x` e `y` e clique em **Calcular**.
3. O resultado será exibido na tela ou uma mensagem de erro, caso haja alguma falha.



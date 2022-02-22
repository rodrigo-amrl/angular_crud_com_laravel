<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 CRUD Angular com Laravel</a>
</h1>
<p align="center">🚀 Exemplo de um projeto, utilizando o laravel 9 (lúmen) como API back end, e utilizando o angular 13 como front end.</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Composer](https://getcomposer.org/), [PHP 8](https://www.php.net/downloads.php),
[Angular](https://www.npmjs.com/package/@angular/cli)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Acesse o terminal/cmd e navegue até a pasta laravel_api e execute o comando
$ composer install

# Na raiz do projeto, encontre o arquivo .env e inclua as configurações do banco de dados, 
e para criar as tabelas do projeto execute o comando no cmd:
$ php artisan migrate

# Para popular as informações nas tabelas execute o comando no cmd:
$ php artisan db:seed

# Com as tabelas já criadas, agora só rodar o servidor com o comando:
$  php -S localhost:8000 -t public

# O servidor inciará na porta:8000 - acesse <http://localhost:8000>, 
qualquer dúvida pode consultar a documentação do lumen: https://lumen.laravel.com/docs/9.x
```

### 🎲 Rodando o Front End 

```bash
# Acesse o terminal/cmd e navegue até a pasta angular_front e execute o comando
$ npm install

# Com as dependências instaladas, agora é só executar o comando:
$  ng serve

# O site inciará na porta:4200 - acesse <http://localhost:4200>,
qualquer dúvida pode consultar a documentação do angular: https://angular.io/docs

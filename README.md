# ionic-list-react

Projeto criado com **Ionic** usando **React** como framework JavaScript. Ionic tem a proposta de com o mesmo código, conseguir construir aplicações moblie, 
web e até desktop. Projeto foi criado já utilizando a template de tabs do Ionic e tem por objetivo principal testar a performance do framework na construção 
de aplicativos nativos recebendo dados de uma API externa.<br/>
Desenvolvido durante a execução do projeto [Oficinas 4.0](https://www2.ifal.edu.br/noticias/ifal-consegue-primeira-colocacao-em-edital-oficinas-4-0-e-garante-r-216-mil-em-recursos) do IFAL em parceria com o IFES. 
Objetivo: Testar qual a melhor plataforma para desenvolver o aplicativo para a rede [Litro de Luz](https://www.litrodeluz.com).

## O que foi utilizado:
- Ionic + React;
- Typescript;
- Axios;
- API externa: https://restcountries.eu

## Instalações:

1. Instalar o **Node e NPM**. Acesse [este link](https://nodejs.org/pt-br/) para saber como baixar e intalar o Node. Junto do Node, já vem o NPM. <br/>
2. (Opcional) Instalar o **Yarn**. O Yarn é um gerenciador de pacotes mais moderno que o NPM, traz algumas facilidades a mais, recomendo utilizá-lo. Acesse [este link](https://yarnpkg.com/getting-started/install) para saber como instalar o Yarn.<br/>
3. Instalar o **Ionic** : Acesse [este link](https://ionicframework.com/docs/intro/cli) para saber como instalar o Ionic CLI.
3. Instalar o **[Git](https://git-scm.com/)**. O Git, em sistemas Linux, já vem instalado.
4. Tenha um Editor de Texto como o [VS Code](https://code.visualstudio.com).
5. Instalar a extensão **Ionic Extension Pack**

## Como executar:

Realize esses comandos em um terminal a parte, ou no próprio terminal integrado do VS Code.
1. Faça um clone desse repositório na sua máquina:
``` sh
 $ git clone https://github.com/LucasBarbosaSilva/ionic-list-react
``` 
2. Execute a aplicação:
``` sh
 # Entre na pasta do projeto:
 $ cd ./ionic-list-react
 # Instale as dependências:
 $ yarn # ou npm install
 # Execute a aplicação:
 $ yarn start # ou npm start
``` 
3. Aguarde o Ionic iniciar o seu navegador.
4. Você pode testar a responsividade do app, apertando F12 para abrir as ferramentas de desenvolvedor e alterando o layout para uma tela de smartphone.
5. Pronto, agora toda alteração que você fizer no código será refletida na aplicação que está rodando no navegador.

## Dúvidas:
Pode mandar a sua dúvida na aba Issues, aqui mesmo no GitHub, ou tentar entrar em contato comigo de outra maneira.

## Sugestões:
Para começar a entender o código vá para o arquivo **App.tsx**, ele é a raiz do nosso projeto. Dentro dele você verá que tem uma estrutura de tags html com 
os componentes que estão sendo utilizados na aplicação.  <br/>
Seu desafio é fazer alguma alteração no projeto, na segunda tela.
``` sh
<Route exact path="/tab1">
  <Tab1 />
</Route>
<Route exact path="/tab2">
  <Tab2 />
</Route>
``` 
Os componentes **Tab1** e **Tab2** são as nossas telas.<br/>
Navegue até a pasta /src/pages e lá terá os arquivos das páginas. Cada página tem um arquivo .tsx, que contém o código propriamente dito, e .css para a sua estilização.

## Para estudar
1. Começar a ver quais são os [UI Components](https://ionicframework.com/docs/components) que a própria documentação do Ionic explica. 
2. Estudar o consumo de uma api externa com **Axios**.

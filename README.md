## Site Institucional Concessionária Web - Aplicação REST Spring Boot + React
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Este é um site institucional para concessionária, com funcionalidades de captura de leads, listagem de produtos e filtros, desenvolvido com React JS para a camada de frontend e Spring Boot para a camada de backend. O banco de dados utilizado é o MySQL a aplicação conta com constainers Docker. A hospedagem é feita na Vercel para a camada frontend e no Railway para a API backend. Em resumo, é uma aplicação para estudos que busca ser moderna, escalável e eficiente, utilizando as principais stacks do mercado.

## Website Status
![BADGE](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)
![BADGE](https://img.shields.io/badge/Maintained%3F-yes-green.svg)


Ver online
- Deploy frontend (host Vercel): [vercel app](https://webmotors-lspf9m5d3-andre-bandeli.vercel.app/)
- Deploy backend (host Railway): [railway app](https://springboot-api-crud-java-react-production.up.railway.app/)


## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
Os comandos a seguir são realizados em ambiente linux ubuntu 20 (consulte os comandos referentes ao seu sistema operacional).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
node.js: v12.22.9
```
```
jdk: 11.0.17
```
```
Maven
```
```
docker:  20.10.17
```

### 🔧 Instalação
![BADGE](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

```
 git clone https://github.com/andre-bandeli/springboot-api-crud-java-react.git
```
```
 cd springboot-api-crud-java-react/main
```
```
 mvn clean install
```

O seguinte resultado é esperado:
![springboot_run](https://user-images.githubusercontent.com/87938869/212789128-3b8f4a5f-73d0-4257-b435-0743ec2b0a39.png)

seguido dos logs
![springboot_logs](https://user-images.githubusercontent.com/87938869/212789258-d7ac1cb6-3907-4583-857c-f48479c605ee.png)

Nesse momento, estamos com nossa aplicação backend (server) disponivel em nosso servidor local. Precisamos agora iniciar nosso projeto frontend (client) 
```
 cd springboot-api-crud-java-react/page
```
```
 npm install
```
```
 npm start
```

## 🛠️ Construído com

* [Java 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html) - Linguagem backend
* [Spring Boot](https://spring.io/projects/spring-boot) - Framework Web Java
* [Maven](https://maven.apache.org/) - Gerenciador de Dependência
* [React JS](https://pt-br.reactjs.org/) - Biblioteca JavaScript
* [Docker](https://www.docker.com/) - Virtualização open source

---

![img](https://user-images.githubusercontent.com/87938869/216098311-a4418764-c60e-4443-8bd3-2a48b0f478a8.jpg)


![1](https://user-images.githubusercontent.com/87938869/206381428-382adc8d-787f-429c-8a8c-6e82c02dd719.jpg)
![2](https://user-images.githubusercontent.com/87938869/206381444-f98c15d5-0e85-4777-93a3-716d74c54ae5.jpg)
![3](https://user-images.githubusercontent.com/87938869/206381459-959f305c-2fd5-46ce-a917-8bc9b9d960f8.jpg)

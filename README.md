## Site Institucional Concessionária Web - Aplicação REST Spring Boot + React
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Este é um site institucional da concessionária com funcionalidade de captura de leads, desenvolvido com React JS para a camada de frontend e Spring Boot para a camada de backend. O banco de dados utilizado é o MySQL e toda a aplicação está conteinerizada com Docker. A hospedagem é feita na Vercel para a camada frontend e no Railway para a API backend. Em resumo, é uma aplicação moderna, escalável e eficiente na captura de leads que utiliza as principais stacks do mercado.

## Status
![BADGE](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)
![BADGE](https://img.shields.io/badge/Maintained%3F-yes-green.svg)


Ver online
[versel app](https://webmotors-lspf9m5d3-andre-bandeli.vercel.app/)



## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
Os comandos a seguir são realizados em ambiente linux ubuntu 20 (consulte os comandos referentes ao seu sistema operacional).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Nodejs
```
```
JDK 18
```
```
Maven
```
```
Docker e Docker compose
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

#### Client (frontend)
Clone o repositório para sua máquina local:
```
 git clone https://github.com/andre-bandeli/springboot-api-crud-java-react.git
```
Caminhe até a pasta :
```
 cd springboot-api-crud-java-react/frontend/page
```
Execute o comando a seguir para instalar as dependências necessárias da aplicação:
```
 npm install
```
Execute o server da aplicação (porta default: 3000)
```
 npm start
```

#### Server (backend)

Estamos dividindo o pŕojeto em 3 módulos: User, Leads e Produtos. Portanto, é necessário que cada serviço seja executado
separadamente.

entre na pasta do projeto

        cd main || cd lead  || cd user

Para cada microsserviço, instale as dependências através do maven. Para isto, caminhe até a pasta onde encontra-se 
o arquivo pom.xml de cada aplicação e rode o seguinte comando:

        mvn clean install


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

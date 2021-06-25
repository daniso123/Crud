# Crud-Funcionario
Formulario para cadastrar funcionario

## Como rodar o Front-end
1. Deve-se possuir o docker instalado
2. Necessário possuir o docker-compose. O Docker-compose pode ser instalado rodando o comando `curl -L https://github.com/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose`, marcar o binário que você como executável:`chmod +x /usr/local/bin/docker-compose` e verificar a versão do Docker Compose: `docker-compose -v`
3. clone o projeto para um diretório.
4. Usando o terminal, vá para a raiz do projeto clonado e digite `docker-compose up --build` para criar o container e logo em seguida roda-lo

### Comando úteis
* Para  Rodar um container já criado digite  `docker-compose up`
* Para parar a execução do container digite `^C` - `CTRL + C`.
* Caso queira excluir o container digite   `docker-compose down`

### Como rodar o Banck-end
1. Deve-se possuir o node.js instalado
2. Rode o npm install no terminal para instalar as dependencias que foi adicionados no projeto e que você não tem
3. Com o terminal digite nodemon server.js




# adicionar o comando "debugger" na linha que deseja parar o código
# node inspect server.js
# list(100) para ver as primeiras 100 linhas de código
# digite c para continuar o debugger
# exec nome_da_variavel para saber o valor ou fazer condicionais
# digite r - para restartar a aplicação
# para setar um break point em código sem usar o debugger basta adicionar sb(numero_da_linha) (nao esquecer de digitar C para continuar  depois de usar o sb)
# step para ir avançando step by step
# podemos inclusive dar exec nos parametros de uma funcao
# para remover um breakpoint apenas cb("arquivo.js", "numero da linha")
# o comando breakpoints mostra todos os breakpoints
# podemos adicionar o waths com o comando watch("variavel") ou incluir condicional watch  ("variavel > 2") obs: aspas deve englobar tudo(precisamos tbm adicionar um breakpoint para o watch funcionar)
# agora rodar node --inspect server.js para usar no navegador A diferença é que para rodar no shell eu nao preciso rodar com a flag --inspect, apenas inspect
na pasta .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Docker: Attach to Node",
      "type": "node",
      "request": "attach",
      "program": "${workspaceFolder/12-docker-debug/server.js}" # path do arquivo
    }
  ]
}

# para rodar no docker e chrome
# Lembrar de exportar a porta tanto da aplicacao ex:3000 quanto do debugger 9229

# Para rodar no docker e no debugger do vscode
# criar um launch.json
# apagar tudo que tem dentro de configurations
# dar um ctrl espaco e escolher o docker
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Docker: Attach to Node",
      "type": "node",
      "request": "attach",
      "restart": true,
      "port": 9229,
      "address": "localhost",
      "localRoot": "${workspaceFolder}/12-docker-debug",
      "remoteRoot": "/home/app",
      "protocol": "inspector"
    }
  ]
}

# localRoot é onde esta o código que voce quer debugar na sua maquina (num projeto normal voce pode colocar só . ou ${workspaceFolder})
# remoteRoot é o diretorio no container onde esta o codigo

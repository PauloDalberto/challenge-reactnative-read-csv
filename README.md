# 🏆 Worst Movie Wins - Frontend

Aplicativo em React Native que consome dados de uma API para exibir estatísticas e informações sobre filmes vencedores de prêmios. O objetivo é mostrar de forma visual e interativa dados processados de arquivos CSV, como:

 - Intervalos de vitórias entre produtores
 - Lista completa de ganhadores por ano
 - CSVs disponíveis para visualização

## Tecnologias Utilizadas
 - React Native
 - Expo Router
 - TypeScript
 - Tailwind com NativeWind
 - Jest + React Native Testing Library 
 - Axios (para requisições HTTP)

## Como rodar o projeto

1. Instale as dependências
```
npm install
```

2. Inicie o ambiente
```
npm start
```
Você pode escanear o QR code com o aplicativo Expo Go no celular ou rodar no emulador.

## Sobre os Testes

O projeto possui testes que verificam se os dados consumidos da API são exibidos corretamente na tela.

![alt text](image-1.png)

### Como rodas os testes

Comando para rodar os testes:

```
npm run test
```

## Observações

O projeto segue o padrão Expo Router para navegação por rotas baseadas em arquivos.

Componentes reutilizáveis como CardIntervals, CardDashboard, BackHeader foram criados para facilitar a expansão futura.

Em caso de erro na requisição, a aplicação redireciona automaticamente para uma tela amigável de erro.
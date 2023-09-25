# Lista de Compras - Aplicativo em React Native

![Imagem do Aplicativo](link-para-imagem-do-aplicativo)

## Visão Geral

Este é um aplicativo simples de lista de compras desenvolvido em React Native. Ele permite que os usuários gerenciem suas listas de compras, adicionem produtos, acompanhem a quantidade e o preço de cada item e calculem o valor total da lista de compras. O aplicativo é dividido em duas telas principais: a tela inicial (`Home`) para visualização da lista de compras e a tela de formulário (`Form`) para adicionar novos produtos à lista.

## Recursos Principais

- **Tela Inicial (Home)**:
  - Exibe a lista de produtos.
  - Mostra o número de produtos na lista.
  - Calcula o valor total da lista de compras com base na quantidade e no preço de cada item.
  - Permite remover produtos da lista.

- **Tela de Formulário (Form)**:
  - Permite ao usuário adicionar novos produtos à lista.
  - Solicita o nome do produto, quantidade e preço.
  - Valida e armazena os dados no armazenamento local.
  - Fornece feedback de sucesso ou erro após a adição de um produto.

## Capturas de Tela

![Captura de tela da Tela Inicial (Home)](link-para-captura-home.png)
![Captura de tela da Tela de Formulário (Form)](link-para-captura-form.png)

## Configuração do Projeto

Para executar este aplicativo em sua máquina local, siga estas etapas:

1. Clone este repositório para sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/lista-de-compras.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd lista-de-compras
   ```

3. Instale as dependências usando npm ou yarn:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o aplicativo:

   ```bash
   npm start
   # ou
   yarn start
   ```

5. Use um emulador ou dispositivo físico para visualizar o aplicativo em execução.

## Dependências Principais

- `@react-native-async-storage/async-storage`: Biblioteca para armazenamento local de dados.
- `@react-native-gesture-handler`: Biblioteca para gestos e toques.
- `react-native-toast-message`: Biblioteca para exibir mensagens de sucesso ou erro.
- `react-native-uuid`: Biblioteca para geração de identificadores únicos.
- `@react-navigation/native` e `@react-navigation/stack`: Bibliotecas para navegação entre telas.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests) para melhorar este aplicativo.

## Licença

Este aplicativo é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

Esperamos que este README ajude a compreender o funcionamento do seu aplicativo Lista de Compras em React Native. Se você tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato.

Obrigado por usar o nosso aplicativo!

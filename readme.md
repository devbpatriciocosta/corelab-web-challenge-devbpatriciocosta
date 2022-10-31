> Status: Pronto para usar ✅

### Esse é um Challenge da CoreLab utilizado como teste de nivelamento. Aqui foi performado um CRUD de veículos.
### Primeiramente gostaria de agradecer ao Diego e ao Thiago pela oportunidade de participar desse desafio e mostrar/colocar em prática os meus conhecimentos adquiridos nos últimos 7 meses de estudo;


#### Os objetivos e requisitos solicitados no desafios que foram cumpridos possuem um check ao lado nas listas abaixo: 

## 1) The Required Features: 

- ✅ On clicking on an "Add new vehicle" button, a new form opens up to create a vehicle.
- ✅ On submitting the form, it needs to save the new vehicle.
- ✅ On typing at the search input, it should filter the vehicles comparing to any of the vehicles property. E.g.: it should compare the searched term to either name, or description, or price, or any other field in the vehicle.
- ✅ On clicking on a heart icon, it should favorite the vehicle.
- ✅ On clicking on an edit icon, it should open the form again to update the selected vehicle.
- ✅ On clicking on an delete icon, it should remove the vehicle.
- ✅ On clicking on the filter icon, it should open the filters form, and when the filters are selected, it should filter the vehicles based on those values.

## 2) Want to impress us even more?

- ✅ Work on correct types and interfaces
- ✅ Work on eslint rules
- ✅ Work prettier config
- ❌ Work on docker containers
- ❌ Work on tests
- ❌ Work on CI/CD

## Os principais componentes são:

1) Página Inicial: 
   - Busca de veículos já cadastrados no banco de dados; 
   - Filtro de veículos cadastrados no banco de dados; 
   - Adição de novos veículos;
   - Veículos favoritos;
   - Veículos anunciados; 
   - Cards para cada veículo;
   - Cada card possui: botões de edição, delete e like. 
   
   
2) Página de adição: 

   - A página de adição contém inputs de cadastro do veículo (Nome, marca, cor, placa, descrição e preço);
   - Contém também botões de salvar o veículo que redireciona para a página incial;
   - Além disso, um botão de voltar, que também redireciona para a página inicial; 


 3) Página de filtro: 
 
   - A página de filtro possui algumas features similares a página inicial, uma vez que também expõe os cards individualizados de cada veículo;
   - Porém, essa página possui inputs de busca por Nome e Marca, cor e preço máximo e mínimo;
   - Por conter o card filtrado, é possivel nessa página, dar o like no veículo desejado;
   - Além disso, um botão de voltar, que também redireciona para a página inicial.
  

## Algumas novas features estão em mente para atualizar o projeto:

- Adição de novos veículo (motos e barcos);
- Separar os veículos por categorias (marca, luxo, tipo);
- Cadastro de usuário;

## Tecnologias utilizadas:

<table>
  <tr>
    <td>JavaScript</td>
    <td>ReactJS + NodeJS + NextJS</td>
    <td>Mongoose - Mongo DB</td>
    <td>EsLint + Prettier</td>
    <td>Styled-Components</td>
    <td>Axios</td>
  </tr>

## Como rodar a aplicação?

1) Run: npm i;
2) crie um aquivo .env.local;
3) Configure as variáveis de BD no .env;
4) Run: npm run dev;
6) Abra o localhost.

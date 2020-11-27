# https://react-flexy-table.netlify.app/
# STATUS: - OK
# GERAL - TEMOS 2 REGRAS, 2 CENÁRIOS, 1 COMPORTAMENTOS CADA
#DICA ACHEI TIRAR SCREENSHOT DE CADA ETAPA EM UM PRIMEIRO MOMENTO DESNECSSARIO
# ASSUMINDO QUE O CYPRESS TEM UM RECURSO DE RODAR PASSO A PASSO

#language: en
Feature: BUSCAS NA TABELA

  COMO usuario
  QUERO buscar registros na tabela
  PARA que possa realzar consultas

  Background:
    Given que a aplicacao seja acessada

  @focus
  # CONCLUIDO -
  #RN 1 - Poder diferenciar as buscas por maiusculas e minusculas (ex: e-mail)
  Scenario Outline: Poder pesquisar diferenciando maiusculas e minusculas
    When tentar pesquisar "<informacao>"
    Then a "<informacao>" é encontrada
    When se pesquisar a "<informacao2>" com letra minusculas
    Then a "<informacao2>" não é encontrada

    Examples: Insere itens na lista TO DO Casos
      | informacao | informacao2 |
      | Dukie      | dukie       |

  # @focus
  # CONCLUIDO -
  #RN 2 - BUSCA CAMPOS INDIVIDUAIS
  Scenario Outline: Poder pesquisar em campos individuais
    When tentar pesquisar "<informacao>" no "<campo>"
    Then o "<resultado>" é encontrado
    # When se pesquisar a "<informacao2>" com letra minusculas
    # Then a "<informacao2>" não é encontrada

    #DICA A IDEIA USADA NA VALIDACAO FOI PROCURAR UM RESULTADO ASSOCIADO A INFO PROCURADA PRA REFORÇAR QUE A FUNCIONALIDADE ESTÁ OK
    Examples: Insere itens na lista TO DO Casos
      | informacao       | campo       | resultado  |
      | 6                | Id          | Yorker     |
      | Iosep            | Nome        | 2          |
      | Anand            | Ultimo Nome | Iosep      |
      | ianand1@digg.com | Email       | Anand      |
      | Female           | Genero      | Krystalle  |
      | 7                | Geral       | Laurentino |


#REQUISITOS OBRIGATORIOS
#CRITERIO #OK ESCOLHER 2 APLICAÇÕES EM https://reactjsexample.com/
#CRITERIO #ITEM  MAPEAR COM #ITEM  Id, #OK CLass e #ITEM  xPath
#CRITERIO #OK  CENÁRIOS DEVEM CONTER PELO MENOS 3 BOAS PRÁTICAS (@focus, scenario outline, background, features, #commnets)
#CRITERIO #OK AS FEATURES DEVEM CLARAS E OBJETIVAS
#CRITERIO #OK AS REGRAS DEVEM SER CLARAS E FAZER SENTIDO
#CRITERIO #ITEM  TIRAR SCREEN SHOTS DAS TELAS
#CRITERIO #OK UTILIZAR PELO MENOS OS COMANDOS GET, SHOULD, CONTAINS, CLICK, CLEAR E TYPE


#REQUISITOS EXTRAS x
#CRITERIO #ITEM #LIMITE  DE ATÉ 2 APLICAÇÕES (DE FÁCIL MANUSEIO)
#CRITERIO #ITEM  SALVAR NUM REPOSITÓRIO
#CRITERIO #ITEM  UTILIZAR O COMANDO #ITEM  PARENT


# LEGENDA/GUIA/MAPA
# o @focus serve para executar/testar apenas o cenário que tenha essa anotação
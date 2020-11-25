# ANULADO https://z2lai.github.io/react-emotion-multi-step-form/#example-app
# https://react-flexy-table.netlify.app/
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO
# GERAL - TEMOS 4 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: INSERIR ITENS NA LISTA TO DO

  COMO usuario
  QUERO inserir dados na lista TO DO
  PARA que possa listar itens

  Background:
    Given que a aplicacao seja acessada
  # @focus
  # CONCLUIDO -
  #RN 1 - Todo item deve ter uma descrição e uma data
  Scenario Outline: Inserir algum <item> na lista TO DO
    When tentar pesquisar "<informacao>"
    Then a "<informacao>" é encontrada

    Examples: Insere itens na lista TO DO Casos
      | informacao |
      | Dukie      |

  @focus
  #RN
  Scenario: Inserir algum item na lista TO DO
    When tentar pesquisar informação x
    Then a informação é encontrada

# Examples: Insere itens na lista TO DO Casos
#   | informacao |
#   | Dukie      |


#REQUISITOS OBRIGATORIOS
#CRITERIO ESCOLHER 2 APLICAÇÕES EM https://reactjsexample.com/
#CRITERIO #ITEM  MAPEAR COM Id, CLass e #ITEM  xPath
#CRITERIO CENÁRIOS DEVEM CONTER PELO MENOS 3 BOAS PRÁTICAS
#CRITERIO #ITEM  AS FEATURES DEVEM CLARAS E OBJETIVAS
#CRITERIO #ITEM AS REGRAS DEVEM SER CLARAS E FAZER SENTIDO
#CRITERIO #ITEM  TIRAR SCREEN SHOTS DAS TELAS
#CRITERIO #ITEM UTILIZAR PELO MENOS OS COMANDOS GET, SHOULD, CONTAINS, CLICK, CLEAR E TYPE


#REQUISITOS EXTRAS x
#CRITERIO #ITEM #LIMITE  DE ATÉ 2 APLICAÇÕES (DE FÁCIL MANUSEIO)
#CRITERIO #ITEM  SALVAR NUM REPOSITÓRIO
#CRITERIO #ITEM  UTILIZAR O COMANDO #ITEM  PARENT


# LEGENDA/GUIA/MAPA
# o @focus serve para executar/testar apenas o cenário que tenha essa anotação
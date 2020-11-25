# https://todohooks.dfweb.no/#complete
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO
# ANULADO

# GERAL - TEMOS 1 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: EXCLUIR ITEM DA LISTA

  COMO usuario
  QUERO poder excluir dados na lista TO DO
  PARA que possa eliminar itens

  Background:
    Given que a aplicacao seja acessada
  @focus
  # CONCLUIDO _
  #RN 1 - Todo item deve ter uma descrição e uma data
  Scenario: EXCLUIR algum <item> na lista TO DO
    When tentar excluir item
    Then o item é excluido


#REQUISITOS OBRIGATORIOS
#CRITERIO #OK MAPEAR COM #ITEM  Id, #ITEM  CLass e #ITEM  xPath
#CRITERIO CENÁRIOS DEVEM CONTER PELO MENOS 3 BOAS PRÁTICAS
#CRITERIO #OK AS FEATURES DEVEM CLARAS E OBJETIVAS
#CRITERIO #OK AS REGRAS DEVEM SER CLARAS E FAZER SENTIDO
#CRITERIO #ITEM  TIRAR SCREEN SHOTS DAS TELAS
#CRITERIO #OK UTILIZAR PELO MENOS OS COMANDOS GET, SHOULD, CONTAINS, CLICK, #ITEM  CLEAR E TYPE


#REQUISITOS EXTRAS x
#CRITERIO #LIMITE  DE ATÉ 2 APLICAÇÕES (DE FÁCIL MANUSEIO)
#CRITERIO #OK  SALVAR NUM REPOSITÓRIO
#CRITERIO UTILIZAR O COMANDO PARENT


# LEGENDA/GUIA/MAPA
# o @focus serve para executar/testar apenas o cenário que tenha essa anotação
# https://todohooks.dfweb.no/#complete
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
  #RN 1 - Poder excluir itens
  Scenario Outline: EXCLUIR algum item na lista TO DO
    When tentar excluir item
    Then o item "<resultado>" é excluido

    Examples:
      | resultado                          |
      | Default TODO from INITIAL_STATE.js |


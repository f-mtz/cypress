# https://todohooks.dfweb.no/#complete
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO

# GERAL - TEMOS 1 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: FILTRAR ITEM DA LISTA QUE ESTIVEREM COMO CONCLUIDO

  COMO usuario
  QUERO poder marcar item da lista TO DO como concluido
  PARA que possa acompanhar o andamento

  Background:
    Given que a aplicacao seja acessada
  @focus
  # CONCLUIDO -
  #RN 1 - Todo item deve ter uma descrição e uma data
  Scenario: Filtrar item na lista TO DO como que estiverem como concluido
    When ocultar itens concluidos
    Then os itens ficam ocultos


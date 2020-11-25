# https://todohooks.dfweb.no/#complete
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO

# GERAL - TEMOS 1 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: MARCAR ITEM DA LISTA COMO CONCLUIDO

  COMO usuario
  QUERO poder marcar item da lista TO DO como concluido
  PARA que possa acompanhar o andamento

  Background:
    Given que a aplicacao seja acessada
  # @focus
  # CONCLUIDO _
  #RN 1 - Todo item deve ter uma descrição e uma data
  Scenario: Marcar <item> na lista TO DO como concluido
    When tentar marcar item como concluido
    Then o item é concluido


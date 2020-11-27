# https://todohooks.dfweb.no/#complete

# GERAL - TEMOS 1 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: MARCAR ITEM DA LISTA COMO CONCLUIDO

  COMO usuario
  QUERO poder marcar item da lista TO DO como concluido
  PARA que possa acompanhar o andamento das tarefas

  Background:
    Given que a aplicacao seja acessada
  # CONCLUIDO _
  #RN 1 - Poder assinalar item como concluido
  Scenario: Marcar item na lista TODO como concluido
    When tentar marcar item como concluido
    Then o item é marcado como concluido


# https://react-flexy-table.netlify.app/
# STATUS: - OK
# GERAL - TEMOS 1 REGRAS, 2 CENÁRIOS, 1 COMPORTAMENTOS CADA
#language: en
Feature: EDITAR (DISABLE) ITEM NA TABELA

  COMO cliente
  QUERO não quero que registros da aplicação sejam alterados/violados
  PARA que possa manter a integridade das informações

  Background:
    Given que a aplicacao seja acessada
  # @focus
  # CONCLUIDO -
  #RN 1 - NÃO PODER VIOLAR INFORMAÇÕES
  Scenario Outline: Não poder <action> dados na aplicação
    When tentar <action> uma informação
    Then é disparada uma notificação com a "<mensagem>" referente a ação <action>

    Examples: Insere itens na lista TO DO Casos
      | mensagem                | action  |
      | this is edit for id 1   | editar  |
      | this is delete for id 1 | excluir |

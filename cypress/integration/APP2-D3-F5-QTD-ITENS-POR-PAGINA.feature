# https://react-flexy-table.netlify.app/
# STATUS: - OK
# GERAL - TEMOS 1 REGRAS, 2 CENÁRIOS, 1 COMPORTAMENTOS CADA
#language: en
Feature: VERIFICAR A FUNCIONALIDADE QUANTIDADE DE REGISTRO POR PÁGINA

  COMO Dev
  QUERO quero verificar se a funcionalidade de quantidade de registro por página está correta
  PARA que possa validar a funcionalidade

  Background:
    Given que a aplicacao seja acessada
  # @focus
  # CONCLUIDO -
  #RN 1 - PODER ESCOLHAR QUANTIDADE DE REGISTRO POR PÁGINA
  Scenario Outline: Poder escolher a quantidade de registros por página
    When escolher a "<quantidade>" de registro por página
    Then espera-se que na página tenha "<quantidade>" registros

    Examples: Insere itens na lista TO DO Casos
      | quantidade |
      | 5          |
      | 10         |
      | 15         |
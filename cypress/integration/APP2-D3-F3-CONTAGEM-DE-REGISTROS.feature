# https://react-flexy-table.netlify.app/
# STATUS: - OK
# GERAL - TEMOS 1 REGRAS, 2 CENÁRIOS, 1 COMPORTAMENTOS CADA
#language: en
Feature: VERIFICAR CONTAGEM DE ITENS PESQUISADOS

  COMO Dev
  QUERO quero verificar se a contagem de registros pesquisados está correta
  PARA que possa validar a funcionalidade

  Background:
    Given que a aplicacao seja acessada
  # @focus
  # CONCLUIDO -
  #RN 1 - NÃO PODER EDITAR INFORMAÇÕES
  Scenario Outline: Contar os resultados das buscas
    When buscar uma "<informacao>"
    Then a contagem de registros esperada é "<quantidade>"

    Examples: Insere itens na lista TO DO Casos
      | informacao | quantidade |
      | Iosep      | 1          |

# https://react-flexy-table.netlify.app/
# STATUS: - OK
# GERAL - TEMOS 1 REGRAS, 2 CENÁRIOS, 1 COMPORTAMENTOS CADA
#language: en
Feature: VERIFICAR A FUNCIONALIDADE DE ORDENACAO

  COMO Dev
  QUERO quero verificar se a funcionalidade de ordenação está correta
  PARA que possa validar a funcionalidade

  Background:
    Given que a aplicacao seja acessada
  # @focus
  # CONCLUIDO -
  #RN 1 - NÃO PODER EDITAR INFORMAÇÕES
  Scenario Outline: Ordenar registros por <nome do campo>
    When habilitar a ordenação
    And clicar no campo "<campo>"
    Then espera-se que na celula tenha a "<informacao>"

    Examples: Insere itens na lista TO DO Casos
      | campo | informacao             | nome do campo |
      | 1     | wrenvoyse@icio.us      | Id            |
      | 2     | ykapiloff5@foxnews.com | Nome          |
      | 3     | isweedlandd@mtv.com    | Ultimo Nome   |
      | 4     | ykapiloff5@foxnews.com | Email         |
      | 5     | ianand1@digg.com       | Genero        |

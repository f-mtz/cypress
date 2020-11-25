#language: en
Feature: Calculadora

  COMO usuario
  QUERO utilizar a Calculadora
  PARA que possa conferir minhas contas/calculos
  # http://kylbutlr-calculator.herokuapp.com/

  Background:
    Given que eu acesse a calculadora
  Scenario Outline: Calcular uma "<operacao>" de valores
    And desejo realizar uma "<operacao>"
    When informar valores "<valor1>" e "<valor2>"
    And finalizar a conta
    Then devo obter o resultado "<resultado>"

    Examples: Calcular uma <operacao> de valores
      | operacao      | valor1 | valor2 | resultado |
      | soma          | 4      | 2      | 6         |
      | subtracao     | 4      | 2      | 2         |
      | multiplicacao | 4      | 2      | 8         |
      | divisao       | 4      | 2      | 2         |


# LEGENDA/GUIA/MAPA
# o @focus serve para executar/testar apenas o cenário que tenha essa anotação
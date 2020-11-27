# https://todohooks.dfweb.no/#complete

# GERAL - TEMOS 3 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: INSERIR ITENS NA LISTA TO DO

  COMO usuario
  QUERO inserir dados na lista TO DO
  PARA que possa listar itens

  Background:
    Given que a aplicacao seja acessada
  # @focus
  #RN 1 - O CAMPO DATA POSSUI MASCARA DE FORMATAÇÃO PADRÃO
  # CONCLUIDO -
  Scenario Outline: Não poder inserir item passando data com formatação incorreta
    When tentar inserir "<item>" com "<data>" incorreta
    Then o botão adicionar não habilita

    Examples: Insere item VAZIO na lista TO DO Casos
      | item          | data       |
      | item qualquer | 2020/11/23 |
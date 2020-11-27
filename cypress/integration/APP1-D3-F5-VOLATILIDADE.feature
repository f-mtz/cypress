# https://todohooks.dfweb.no/#complete
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO

# GERAL - TEMOS 1 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: LIMPAR LISTA

  Background:
    Given que a aplicacao seja acessada
  @focus
  # EM ANDAMENTO
  #RN 1 - App não deve armazenar os dados após ser recarregada
  Scenario Outline: Limpar os itens ao recarregar página

    When inserir "<item>" com a "<data>"
    Then ao recarregar a aplicação, os itens são apagados

    Examples:
      | item          | data       |
      | item inserido | 2020-11-27 |
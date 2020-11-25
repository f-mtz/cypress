# https://todohooks.dfweb.no/#complete
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO

# GERAL - TEMOS 1 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: GARANTIR QUE LISTA NÃO GUARDE OS DADOS DO USUÁRIO APÓS RECARREGAR A APLICAÇÃO

  Background:
    Given que a aplicacao seja acessada
  @focus
  # EM ANDAMENTO
  #RN 1 - Todo item deve ter uma descrição e uma data
  Scenario: Limpar os itens ao recarregar página
    When recarregar a aplicação
    Then os itens são apagados
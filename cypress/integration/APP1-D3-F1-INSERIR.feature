# https://todohooks.dfweb.no/#complete
# STATUS: _
#CONCLUIDO
# EM ANDAMENTO
# ANULADO

# GERAL - TEMOS 4 CENÁRIOS, COMPORTAMENTOS, REGRAS

#language: en
Feature: INSERIR ITENS NA LISTA TO DO

   COMO usuario
   QUERO inserir dados na lista TO DO
   PARA que possa listar itens

   Background:
      Given que a aplicacao seja acessada
   # @focus
   # CONCLUIDO -
   #RN 1 - Todo item deve ter uma descrição e uma data
   Scenario Outline: Inserir algum <item> na lista TO DO
      When tentar inserir "<item>" com "<data>"
      Then o "<resultado>" é inserido

      Examples: Insere itens na lista TO DO Casos
         | item          | data       | resultado     |
         | item inserido | 2020-11-23 | item inserido |

   # @focus
   # CONCLUIDO -
   #RN 2 - Não poder inserir item com menos de 5 caracter
   Scenario Outline: Inserir algum <item> na lista TO DO
      When tentar inserir "<descricao>"
      Then o chegamos ao "<resultado>"

      Examples: Insere itens VAZIOS na lista TO DO Casos
         | descricao | resultado                  |
         | id        | Length must be more than 5 |

   # @focus
   #RN 3 - Inserindo item vazio (burlando)
   # CONCLUIDO -
   Scenario Outline: Inserir algum <item> na lista TO DO
      When tentar inserir item com "<data>"
      Then o "<resultado>" é alcançado

      Examples: Insere itens na lista TO DO Casos
         | item  | data       | resultado     |
         | vazio | 2020-11-23 | item inserido |

   # @focus
   #RN 4 - Não pode inserir item na lista TO DO sem data
   # CRIEI UM NOVO CENÁRIO POIS A FORMA DE VERIFICAR É DIFERENTE
   # CONCLUIDO -
   Scenario Outline: Não poder inserir algum <item> na lista TO DO sem data
      When tentar inserir "<item>" sem data
      Then o item não é inserido

      Examples: Insere itens na lista TO DO Casos
         | item  |
         | valor |


#REQUISITOS OBRIGATORIOS
#CRITERIO ESCOLHER 2 APLICAÇÕES EM https://reactjsexample.com/
#CRITERIO #OK MAPEAR COM Id, CLass e #ITEM  xPath
#CRITERIO CENÁRIOS DEVEM CONTER PELO MENOS 3 BOAS PRÁTICAS
#CRITERIO #OK AS FEATURES DEVEM CLARAS E OBJETIVAS
#CRITERIO #OK AS REGRAS DEVEM SER CLARAS E FAZER SENTIDO
#CRITERIO #OK TIRAR SCREEN SHOTS DAS TELAS
#CRITERIO #OK UTILIZAR PELO MENOS OS COMANDOS GET, SHOULD, CONTAINS, CLICK, CLEAR E TYPE


#REQUISITOS EXTRAS x
#CRITERIO #OK #LIMITE  DE ATÉ 2 APLICAÇÕES (DE FÁCIL MANUSEIO)
#CRITERIO #OK  SALVAR NUM REPOSITÓRIO
#CRITERIO #ITEM  UTILIZAR O COMANDO PARENT


# LEGENDA/GUIA/MAPA
# o @focus serve para executar/testar apenas o cenário que tenha essa anotação
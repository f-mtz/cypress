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
   # CONCLUIDO -
   #RN 1 - Todo item deve ter uma descrição e uma data
   Scenario Outline: <on/off> inserir item <condicao> data na lista TO DO
      When tentar inserir "<item>" "<condicao>" "<data>"
      Then o "<resultado>" "<sim/não>" inserido na condição: "<condicao>"

      Examples: Insere itens na lista TO DO Casos
         | item          | condicao | data       | resultado     | sim/não | on/off |
         | item inserido | com      | 2020-11-23 | item inserido | é       |        |
         | item inserido | sem      | data       | item inserido | não é   | não    |

   # @focus
   # CONCLUIDO -
   #DICA MANTIVE ESSE CENARIO POIS LI QUE É UM BOA PRATICA PODER ANALISAR COMPORTAMENTOS ISOLADAMENTE
   #RN 2 - Não poder inserir item com menos de 5 caracter
   Scenario Outline: Não poder inserir item com menos de 5 caracteres
      When tentar inserir "<descricao>"
      Then chegamos ao "<resultado>"

      Examples:
         | descricao | resultado                  |
         | id        | Length must be more than 5 |

   # @focus
   #RN 3 - Inserindo item vazio (burlando)
   # CONCLUIDO -
   Scenario Outline: Inserir item <vazio> na lista TO DO
      When tentar inserir item com "<data>"
      Then o "<resultado>" é alcançado

      Examples: Insere item VAZIO na lista TO DO Casos
         | vazio | data       | resultado     |
         | vazio | 2020-11-23 | item inserido |


#REQUISITOS OBRIGATORIOS
#CRITERIO ESCOLHER 2 APLICAÇÕES EM https://reactjsexample.com/
#CRITERIO #OK MAPEAR COM Id, CLass e xPath
#CRITERIO #OK  CENÁRIOS DEVEM CONTER PELO MENOS 3 BOAS PRÁTICAS (@focus, scenario outline, background, features, #commnets)
#CRITERIO #OK AS FEATURES DEVEM CLARAS E OBJETIVAS
#CRITERIO #OK AS REGRAS DEVEM SER CLARAS E FAZER SENTIDO
#CRITERIO #ITEM  TIRAR SCREEN SHOTS DAS TELAS
#CRITERIO #OK UTILIZAR PELO MENOS OS COMANDOS GET, SHOULD, CONTAINS, CLICK, CLEAR E TYPE


#REQUISITOS EXTRAS x
#CRITERIO #OK #LIMITE  DE ATÉ 2 APLICAÇÕES (DE FÁCIL MANUSEIO)
#CRITERIO #OK  SALVAR NUM REPOSITÓRIO
#CRITERIO #OK  UTILIZAR O COMANDO PARENT


# LEGENDA/GUIA/MAPA
# o @focus serve para executar/testar apenas o cenário que tenha essa anotação
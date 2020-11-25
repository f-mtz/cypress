   # Organizar itens na lista TO DO
   # COMO organizador de lista TO DO
   # DESEJO organizar os itens na minha lista
   # PARA que eu tenha controle sobre o que preciso fazer

#language: en
Feature: Adicionar itens

   #Regra: Todo item tem uma descrição
   Scenario Outline: Novo item "<resultado>" à lista TO DO
      Given que a aplicacao seja acessada
      When tento adicionar o item "<novo item>"
      Then o item "<resultado>"      
      Examples:
         | novo item           | resultado        | 
         | Fazer projeto final | é adicionado     |

   #Regra: É possível ter itens com a mesma descrição
   #Regra: É possível excluir itens da lista TO DO
   #Regra: É possível editar a descrição de itens da lista TO DO
   #Regra: É possível editar um item da lista
   #Regra: É possível marcar como completo um item da lista
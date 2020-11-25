#language: en

# https://mastro-elfo.github.io/todo-react/#/dashboard (URL BASE)

Feature: Organizar itens na lista TO DO
   COMO organizador de lista TO DO
   DESEJO organizar os itens na minha lista
   PARA que eu tenha controle sobre o que preciso fazer

   #Regra: Todo item tem uma descrição
   # @focus
   Scenario Outline: Novo item <resultado> à lista TO DO
      Given que não exista nenhum item na lista TO DO
      When tento adicionar o item "<novo item>"
      Then o item "<resultado>"
      Examples:
         | novo item | resultado |
         |           |           |

   #Regra: Inserindo item válido
   # @focus
   Scenario Outline: Adicionado novo item válido à lista TO DO
      Given que exista ou não algum item na lista TO DO
      When tento adicionar o item "<novo item>"
      Then o item "<resultado>"
      Examples:
         | novo item            | resultado            |
         | novo item adicionado | novo item adicionado |

   #Regra : É possível ter itens com a mesma descrição (REPETIÇÃO)
   # @focus
   # @ignore
   Scenario Outline: item repetido na lista
      Given que acessamos a aplicação
      When tento adicionar o mesmo item "<novoitem>" mais de uma vez
      Then o item "<resultado>"
      Examples:
         | novoitem       | resultado      |
         | estou repetido | estou repetido |

   #CRUD
   #Regra: É possivel adicionar um elemento vazio (burlando)
   # @focus
   Scenario Outline: Novo item vazio à lista TO DO
      Given que já exista um item na lista TO DO
      When tento editar o item "<item>"
      Then o item "<resultado>"
      Examples:
         | item | resultado    |
         |      | é adicionado |

   #Regra: É possível editar a descrição de itens da lista TO DO (CRUD - UPDATE)
   #  @focus
   Scenario Outline: Editar item à lista TO DO
      Given que já exista um item na lista TO DO
      When tento editar o item "<item>"
      Then o item original deve ser diferente "<resultado>"
      Examples:
         | item                | resultado |
         | Fazer projeto final | editado   |

   #Regra: É possível excluir itens da lista TO DO (CRUD - DELETE)
   # @focus
   Scenario Outline: Excluir item <resultado> da lista TO DO
      Given que exista pelo menos um item na lista TO DO
      When tento excluir o item "<item>"
      Then o item "<resultado>"
      Examples:
         | item                | resultado |
         | Fazer projeto final | excluido  |

   #Regra: É possível marcar como completo um item da lista (VISTO)
   # @focus
   Scenario Outline: Poder marcar item como
      Given que tenho um item na lista
      When eu tento selecionar item
      Then o item "<selecionado>"
      Examples:
         | selecionado |
         | be.checked  |


   #Regra: Posso habilitar uma barra de progresso

   #Regra: Posso filtrar meus tópicos
   # @focus
   Scenario Outline: Poder filtrar/localizar meus itens pela descrição
      Given que tenho alguns itens na lista
      When  tento buscar um item
      Then o item "<filtrado>"
      Examples:
         | filtrado |
         | valor 1  |

#Regra: Quero deletar tarefa com base em condições?
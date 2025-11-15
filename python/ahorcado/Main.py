from Menu import Menu
from MenuItem import MenuItem
import os
import random

class App:
  def __init__(self):
    self.choice = '0'
    self.word = [
      'python', 'java', 'kotlin', 'javascript', 'hangman', 'programming', 'development', 'challenge', 'function', 'variable'
    ]
  
  def get_word(self):
    return random.choice(self.word)
  
  def display_word(self, word):
    for _ in word:
      print('_', end=' ')
    print()

  def msn_continue(self): 
    input('Presione Enter para continuar...')

  def main(self):
      self.menu = Menu(
        title='Menú Ahorcado', menu_items=[
          MenuItem(1, 'Iniciar Juego'),
          MenuItem(2, 'Ver Scoreboard'),
          MenuItem(3, 'Salir')
      ])
      
      while self.choice != '3':
        self.clear_screen()
        self.menu.display()
        self.choice = self.menu.get_choice()
        self.clear_screen()
        match self.choice:
          case '1':
            self.menu.display_menu_item(1)
            self.display_word(self.get_word())
            self.msn_continue()
          case '2':
            self.menu.display_menu_item(2)
            self.msn_continue()
          case '3':
            self.menu.display_menu_item(3)
            self.msn_continue()
          case _:
            print('Opción no válida')
            self.msn_continue()
  
  def clear_screen(self):
      os.system('clear')


app = App()
app.main()
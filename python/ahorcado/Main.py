from Menu import Menu
from MenuItem import MenuItem
import os
import random

class App:
  def __init__(self):
    self.choice = '0'
    self.word = ''
    self.result = ''
    self.word_list = [
      'python', 'java', 'kotlin', 'javascript', 'hangman', 'programming', 'development', 'challenge', 'function', 'variable'
    ] 

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
            self.play_game()
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
  
  def play_game(self):
    tries = 0
    limit_tries = 3
    char_or_word = ''
    self.word = self.get_word()
    self.result = '_' * len(self.word)
    while limit_tries >= tries:
      is_found = False
      self.clear_screen()
      self.menu.display_menu_item(1)
      self.display_word(self.result)

      if char_or_word == self.word or self.word == self.result:
        print('¡Correcto! Adivinaste la palabra')
        break 

      if tries == limit_tries:
        print('Has perdido. Se han agotado tus intentos.')
        break     
            
      char_or_word = input('Escriba la letra o la palabra: ')

      for i in range(len(self.word)):
        if self.word[i] == char_or_word:
            self.result = self.result[:i] + char_or_word + self.result[i+1:]
            is_found = True

      if not is_found:
        print(f'Incorrecto. Te quedan {limit_tries - tries - 1} intentos.')
        tries += 1
        self.msn_continue()

  def get_word(self):
    #return random.choice(self.word_list)
    return 'java'

  def msn_continue(self): 
    input('Presione Enter para continuar...')

  def display_word(self, word):
    for char in word:
      print(char, end=' ')
    print()

  def clear_screen(self):
      os.system('clear')


app = App()
app.main()
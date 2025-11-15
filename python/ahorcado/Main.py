from Menu import Menu
from MenuItem import MenuItem
import os

class App:
  def __init__(self):
    self.choice = '0'
  def main(self):
      self.menu = Menu(
        title='Menú Ahorcado', menu_items=[
          MenuItem(1, 'Iniciar Juego'),
          MenuItem(2, 'Ver Scoreboard'),
          MenuItem(3, 'Salir')
      ])
      
      self.clear_screen()
      self.menu.display()
      self.choice = self.menu.get_choice()
      self.clear_screen()
      match self.choice:
        case '1':
          self.menu.display_menu_item(1)
        case '2':
          self.menu.display_menu_item(2)
        case '3':
          self.menu.display_menu_item(3)
        case _:
          print('Opción no válida')
  
  def clear_screen(self):
      os.system('clear')


app = App()
app.main()
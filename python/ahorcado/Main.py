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
      
      while self.choice != '3':
        self.clear_screen()
        self.menu.display()
        self.choice = self.menu.get_choice()
        self.clear_screen()
        match self.choice:
          case '1':
            self.menu.display_menu_item(1)
            input('Presione Enter para continuar...')
          case '2':
            self.menu.display_menu_item(2)
            input('Presione Enter para continuar...')
          case '3':
            self.menu.display_menu_item(3)
            input('Presione Enter para continuar...')
          case _:
            print('Opción no válida')
            input('Presione Enter para continuar...')
  
  def clear_screen(self):
      os.system('clear')


app = App()
app.main()
from Menu import Menu
from MenuItem import MenuItem
import os

class App:
  def main(self):
      self.menu = Menu(
        title='Menú Ahorcado', menu_items=[
          MenuItem(1, 'Iniciar Juego'),
          MenuItem(2, 'Ver Scoreboard'),
          MenuItem(3, 'Salir')
      ])
      self.menu.display()
      choice = self.menu.get_choice()
      print(f'Has seleccionado la opción: {choice}')

os.system('clear')
app = App()
app.main()
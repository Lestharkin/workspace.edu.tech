from Menu import Menu
from MenuItem import MenuItem
import os

class App:
  def main(self):
      self.menu = Menu(
        title='Menu Ahorcado', menu_items=[
          MenuItem(1, 'Iniciar Juego'),
          MenuItem(2, 'Ver Scoreboard'),
          MenuItem(3, 'Salir')
      ])

os.system('clear')
app = App()
app.main()
app.menu.display()
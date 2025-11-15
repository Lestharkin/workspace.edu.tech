from Menu import Menu
import os

class App:
  def main(self):
      self.menu = Menu()

os.system('clear')
app = App()
app.main()
app.menu.display()
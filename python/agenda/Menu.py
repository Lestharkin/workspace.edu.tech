class Menu:
  def __init__(self, title='Menu', menu_items=None):
    self.title = title
    self.menu_items = menu_items

  def display(self):
    print(f'--- {self.title} ---')
    if self.menu_items:    
      for item in self.menu_items:
        print(f'{item.id}. {item.description}')
    print('---------------------')

  def display_menu_item(self, id):
    print(next((f'{item.id}. {item.description}' for item in self.menu_items if item.id == id), None))

  def get_choice(self):
    choice = input('Seleccione una opción: ')
    return choice
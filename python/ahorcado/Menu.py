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



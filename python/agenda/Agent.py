import os
from Menu import Menu
from MenuItem import MenuItem
from Contact import Contact
from Address import Address
from Type import Type
from Email import Email




class Agent:
    def __init__(self):
        self.contacts = {}
        self.choice = '0'
    
    def register(self, contact):
        self.contacts[contact.id] = contact
    
    def search(self, key):
        for k in self.contacts.keys():
            if k == key:
                return self.contacts[key]
            else:
                return None
    
    def get_all_contacts(self):
        return self.contacts.values()
    
    def main(self):
      self.menu = Menu(
        title='Agenda', menu_items=[
          MenuItem(1, 'Registrar Contacto'),
          MenuItem(2, 'Buscar Contacto'),
          MenuItem(3, 'Editar Contacto'),
          MenuItem(4, 'Salir')
      ])
      
      while self.choice != '4':
        self.clear_screen()
        self.menu.display()
        self.choice = self.menu.get_choice()
        self.clear_screen()
        match self.choice:
          case '1':            
            self.register()
            self.msn_continue()
          case '2':
            self.search_by_names()
            self.msn_continue()
          case '3':
            self.menu.display_menu_item(3)
            self.msn_continue()
          case '4':
            self.menu.display_menu_item(4)
            self.msn_continue()
          case _:
            print('Opción no válida')
            self.msn_continue()
    
    def msn_continue(self): 
      input('Presione Enter para continuar...')

    def clear_screen(self):
      os.system('clear')

    def register(self):
      inp_contact = input('Ingrese los datos del contacto (names,surnames, email, address, cellphone) separados por comas: ')
      names, surnames, email, address, cellphone = inp_contact.split(',')
      id_contact = f"id-{str(len(self.contacts) + 1)}"
      contact = Contact(id_contact, names, surnames, Email().construct_email(email), Address(address, Type(1,"Diagonal")), cellphone)
      self.contacts[names] = contact
      print('Contacto registrado exitosamente.')

    def search_by_names(self):
      search_names = input('Ingrese el nombres del contacto a buscar: ')
      contact = self.search(search_names)
      if contact:
          print('Contacto encontrado:')
          print(contact.get_contact_info())
      else:
          print('Contacto no encontrado.')

agent = Agent()
agent.main()
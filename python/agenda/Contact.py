from Person import Person

class Contact(Person):
    def __init__(self, id, names, surnames, email, address, cellphone):
        super().__init__(names, surnames)
        self.id = id
        self.email = email
        self.address = address
        self.cellphone = cellphone
    

    def get_contact_info(self):
        return f"Name: {self.get_names()} {self.get_surnames()}, Email: {self.email.get_email()}, Phone: {self.cellphone}, Address: {self.address.get_full_address()}"
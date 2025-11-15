class Address:
  def __init__(self, zip, type):
    self.__zip = zip
    self.__type = type

  def get_zip(self):
    return self.__zip
  
  def get_type(self):
    return self.__type

  def type_equals(self, type):
    return self.__type == type
  
  def zip_equals(self, zip):
    return self.__zip == zip
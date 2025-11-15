class Person:
  def __init__(self, names, surnames):
    self.__names = names
    self.__surnames = surnames
  
  def get_names(self):
    return self.__names
  
  def get_surnames(self):
    return self.__surnames  

  def get_full_name(self):
    return f"{self.__names} {self.__surnames}"
  
  def set_names(self, names):
    self.__names = names
  
  def set_surnames(self, surnames):
    self.__surnames = surnames
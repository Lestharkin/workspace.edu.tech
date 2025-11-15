class Type:
  def __init__(self, id, description):
    self.__id = id
    self.__description = description
  
  def get_id(self):
    return self.__id
  
  def get_description(self):
    return self.__description
  
  def set_id(self, id):
    self.__id = id

  def set_description(self, description):
    self.__description = description
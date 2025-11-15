class Email:
    
  def construct(self, user, domain, extension):
    self.__user = user
    self.__domain = domain
    self.__extension = extension

  def construct_email(self, email):
    parts = email.split('@')
    user = parts[0]
    domain_parts = parts[1].split('.')
    domain = domain_parts[0]
    extension = domain_parts[1]
    self.construct(user, domain, extension)
    return self

  def equals(self, email):
    return f"{self.__user}@{self.__domain}.{self.__extension}" == email
  
  def get_email(self):
    return f"{self.__user}@{self.__domain}.{self.__extension}"
  
  def set_user(self, user):
    self.__user = user
  
  def set_domain(self, domain):
    self.__domain = domain
  
  def set_extension(self, extension):
    self.__extension = extension

  
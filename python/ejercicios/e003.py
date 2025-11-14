sueldo = input("Introduce el sueldo: ")
sueldo = float(sueldo)
if sueldo < 1000:
  sueldo *= 1.15
  print("El sueldo final es:", sueldo)
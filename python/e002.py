try:
  a = input("Introduce un número a: ")
  b = input("Introduce un número b: ")
  c = input("Introduce un número c: ")
  a = float(a)
  b = float(b)
  c = float(c)
  x1 = (-b + (b**2 - 4*a*c)**(1/2)) / (2*a)
  x2 = (-b - (b**2 - 4*a*c)**(1/2)) / (2*a)
  print(f"El resultado es: {x1:.2f}, {x2:.2f}")
except ValueError:
  print("Error: Entrada inválida.")
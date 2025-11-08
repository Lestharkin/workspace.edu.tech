try:
  a = input("Introduce un número a: ")
  b = input("Introduce un número b: ")
  a = float(a)
  b = float(b)
  x = ((a+b)**2) / 3
  print(f"El resultado es: {x:.2f}")
except ValueError:
  print("Error: Entrada inválida.")

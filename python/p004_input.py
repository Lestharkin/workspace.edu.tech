x = input("Introduce número 1: ")
y = input("Introduce número 2: ")
try:
  z = int(x) + float(y)
except ValueError:
  z = "Error: Entrada inválida."
print("Resultado:", z)
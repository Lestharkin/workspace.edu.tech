valor, Num = input("Ingrese valor y opción separados por coma: ").split(",")
valor = float(valor)
Num = int(Num)

match Num:
  case 1:
    resultado = valor * 100
  case 2:
    resultado = 100 ** valor
  case 3:
    resultado = 100 / valor
  case _:
    resultado = "Para cualquier otro valor de Num"
print(resultado)
valor, Num = input("Ingrese valor y opción separados por coma: ").split(",")
valor = float(valor)
Num = int(Num)

if Num == 1:
    resultado = valor * 100
elif Num  == 2:
    resultado = 100 ** valor
elif Num == 3:
    resultado = 100 / valor
else:
    resultado = "Para cualquier otro valor de Num"
print(resultado)
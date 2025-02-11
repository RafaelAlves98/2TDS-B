import tkinter as tk

#função para somar dois números 
def somar():
    try:
        valor1 = float(entry_valor1.get())#pega o valor 1
        valor2 = float(entry_valor1.get())#pega o valor 2
        resultado = valor1 + valor2
        label_resultado.config(text=f"Resultado:{resultado}")
    except ValueError:
        label_resultado.config(text= "Por favor, Insira numeros validos")

root = tk.Tk()
root.title("Calculadora de Soma")
label_valor1 = tk.Label(root, text = "Valor 1" , font=("Arial",14))
label_valor1.grid(row=0, column=0, padx=10, pady=10) 

label_valor2 = tk.Label(root, text = "Valor 2" , font=("Arial",14))
label_valor2.grid(row=1, column=0, padx=10, pady=10) 

entry_valor1 = tk.Entry(root, font=("Arial",14))
entry_valor1.grid(row=0, column=1, padx=10, pady=10)

entry_valor2 = tk.Entry(root, font=("Arial",14))
entry_valor2.grid(row=1, column=1, padx=10, pady=10)

botao_somar = tk.Button(root, text="Somar",font=("Arial",14), command=somar)
botao_somar.grid(row=2, column=0, columnspan=2,pady=10)

label_resultado = tk.Label(root,text="Resultado",font=("Arial,14"))
label_resultado.grid(row=3, column=0, columnspan=2, pady=10)

#função para atualizar o visor com os numeros e operações 

def press(Key):
    current = visor.get()
    visor.set(current + str(Key))

#função para calcular o resultado
def calcular():
    try:
        result = eval(visor.get())
        visor.set(result)
    except Exception as e:
        visor.set("Erro")

#função para limpar o visor 
def limpar():
    visor.set("")

#criando janela principal 
root = tk.Tk()
root.title("Calculadora do Rafael")

#definindo o visor da calculadora 
visor = tk.Tk()
root.title("Calculadora do Rafael")

#definindo o visor da calculadora
visor = tk.StringVar()
entry = tk.Entry(root, textvariable=visor, font = ("Arial", 20), bd = 10, relief = "sunken", width = 16, justify = "right")
entry.grid(row = 0, column = 0, columnspan = 4)

#definindo os botões
buttons = [
        ('7', 1, 0), ('8', 1, 1), ('9', 1, 2), ('/', 1, 3),
        ('4', 2, 0), ('5', 2, 1), ('6', 2, 2), ('*', 2, 3),
        ('1', 3, 0), ('2', 3, 1), ('3', 3, 2), ('-', 3, 3),
        ('0', 4, 0), ('C', 4, 1), ('=', 4, 2), ('+', 4, 3),
]

#adicionando os botões a janela
for(text, row, col) in buttons:
    if text == '=':
        buttons = tk.Button(root, text = text, font = ("Arial", 20), width = 5, height = 2, command = calcular)
    elif text == 'C':
        buttons = tk.Button(root, text = text, font = ("Arial", 20), width = 5, height = 2, command = limpar)
    else:
        buttons = tk.Button(root, text = text, font = ("Arial", 20), width = 5, height = 2, command = lambda key = text: press(key))
        buttons.grid(row = row, column = col)

#iniciar a interface gráfica
root.mainloop()
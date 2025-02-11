import tkinter as tk

# Função para atualizar a tela
def atualizar_tela(valor):
    atual = entry_display.get()
    entry_display.delete(0, tk.END)  # Limpa a tela
    entry_display.insert(tk.END, atual + valor)  # Adiciona o novo valor

# Função para calcular o resultado
def calcular():
    try:
        resultado = eval(entry_display.get())  # Avalia a expressão matemática
        entry_display.delete(0, tk.END)  # Limpa a tela
        entry_display.insert(tk.END, str(resultado))  # Exibe o resultado
    except:
        entry_display.delete(0, tk.END)  # Limpa a tela
        entry_display.insert(tk.END, "Erro")  # Exibe erro

# Função para limpar a tela
def limpar():
    entry_display.delete(0, tk.END)

# Configurações da janela
root = tk.Tk()
root.title("Calculadora")

# Tela de exibição
entry_display = tk.Entry(root, font=("Arial", 20), width=16, borderwidth=2, relief="solid", justify="right")
entry_display.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# Botões da calculadora
botoes = [
    ('7', 1, 0), ('8', 1, 1), ('9', 1, 2), ('/', 1, 3),
    ('4', 2, 0), ('5', 2, 1), ('6', 2, 2), ('*', 2, 3),
    ('1', 3, 0), ('2', 3, 1), ('3', 3, 2), ('-', 3, 3),
    ('0', 4, 0), ('C', 4, 1), ('=', 4, 2), ('+', 4, 3),
]

# Adicionando os botões à interface
for (texto, linha, coluna) in botoes:
    if texto == "=":
        tk.Button(root, text=texto, font=("Arial", 18), width=5, height=2, command=calcular).grid(row=linha, column=coluna, padx=5, pady=5)
    elif texto == "C":
        tk.Button(root, text=texto, font=("Arial", 18), width=5, height=2, command=limpar).grid(row=linha, column=coluna, padx=5, pady=5)
    else:
        tk.Button(root, text=texto, font=("Arial", 18), width=5, height=2, command=lambda valor=texto: atualizar_tela(valor)).grid(row=linha, column=coluna, padx=5, pady=5)

# Inicia a interface gráfica
root.mainloop()

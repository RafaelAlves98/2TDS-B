import tkinter as tk
from tkinter import messagebox

def mostrar_saudacao():
    nome = entrada_nome.get()
    if nome:
        messagebox.showinfo("Saudação", f"Olá, {nome}")
    else:
        messagebox.showwarning("Atenção!", "Por favor, insira seu nome")

janela = tk.Tk()
janela.title("Aplicativo de Saudação")
janela.geometry("400x300")

rotulo = tk.Label(janela, text="Insira seu nome: ", font=("Arial", 14))

entrada_nome = tk.Entry(janela, font=("Arial", 14))
entrada_nome.pack(pady=10)

botao = tk.Button(janela, text="Saudar", command=mostrar_saudacao, font=("Arial", 14))
botao.pack(pady=20)

janela.mainloop()
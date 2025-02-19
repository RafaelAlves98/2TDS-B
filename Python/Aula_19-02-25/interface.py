import tkinter as tk

janela = tk.Tk()

janela.title("Título da Aba")
janela.geometry("400x300")

rotulo = tk.Label(janela, text="Olá, Tkinter!")
rotulo.pack(pady=10)

botao = tk.Button(janela, text="Clique Aqui", command=janela.quit)
botao.pack(pady=10)

janela.mainloop()
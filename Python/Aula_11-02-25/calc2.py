import tkinter as tk
import math

class CalculatorApp:
    def __init__(self, master):
        self.master = master
        master.title("Calculadora Científica")

        # Variável que guarda a expressão exibida no visor
        self.expression = tk.StringVar()

        # Configuração do visor
        self.entry = tk.Entry(master, textvariable=self.expression,
                              font=("Arial", 20), bd=10, relief="sunken",
                              width=22, justify="right")
        self.entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

        # Definindo os botões e sua posição na grade (row, col)
        # Para o botão '=' foi definido um "columnspan" de 4 para ocupar toda a linha.
        buttons = [
            ('7', 1, 0), ('8', 1, 1), ('9', 1, 2), ('/', 1, 3),
            ('4', 2, 0), ('5', 2, 1), ('6', 2, 2), ('*', 2, 3),
            ('1', 3, 0), ('2', 3, 1), ('3', 3, 2), ('-', 3, 3),
            ('0', 4, 0), ('.', 4, 1), ('C', 4, 2), ('+', 4, 3),
            ('(', 5, 0), (')', 5, 1), ('√', 5, 2), ('exp', 5, 3),
            ('=', 6, 0, 4)  # Botão '=' ocupa 4 colunas
        ]

        # Criação e posicionamento dos botões
        for button in buttons:
            if len(button) == 3:
                text, row, col = button
                colspan = 1
            else:
                text, row, col, colspan = button

            # Define a ação de cada botão
            if text == 'C':
                action = self.clear
            elif text == '=':
                action = self.calculate
            elif text == '√':
                # Ao pressionar '√', insere "sqrt(" no visor
                action = lambda char="sqrt(": self.press(char)
            elif text == 'exp':
                # Ao pressionar 'exp', insere "exp(" no visor
                action = lambda char="exp(": self.press(char)
            else:
                # Para os demais, insere o próprio caractere clicado
                action = lambda char=text: self.press(char)

            btn = tk.Button(master, text=text, font=("Arial", 20),
                            width=5, height=2, command=action)
            btn.grid(row=row, column=col, columnspan=colspan, padx=5, pady=5)

    def press(self, char):
        """Adiciona o caractere à expressão do visor."""
        current_expr = self.expression.get()
        self.expression.set(current_expr + char)

    def clear(self):
        """Limpa o visor."""
        self.expression.set("")

    def calculate(self):
        """Avalia a expressão do visor e mostra o resultado."""
        try:
            # Ambiente com funções matemáticas permitidas
            allowed_names = {"sqrt": math.sqrt, "exp": math.exp}
            # Avalia a expressão com um ambiente sem builtins (para segurança)
            result = eval(self.expression.get(), {"__builtins__": None}, allowed_names)
            self.expression.set(result)
        except Exception:
            self.expression.set("Erro")

if __name__ == "__main__":
    root = tk.Tk()
    app = CalculatorApp(root)
    root.mainloop()
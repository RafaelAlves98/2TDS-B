document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#calendario", {
        enableTime: true,
        dateFormat: "d-m-Y H:i",
        locale: "pt", // Calendário em português
        onChange: function (selectedDates, dateStr, instance) {
            // Verifica se há uma data selecionada
            if (selectedDates.length > 0) {
                const dataSelecionada = selectedDates[0];
                // Array com os dias da semana em português
                const diasSemana = [
                    "Domingo",
                    "Segunda-feira",
                    "Terça-feira",
                    "Quarta-feira",
                    "Quinta-feira",
                    "Sexta-feira",
                    "Sábado"
                ];
                // Obtém o dia da semana (0 = Domingo, 1 = Segunda, etc.)
                const diaSemana = diasSemana[dataSelecionada.getDay()];
                // Atualiza o texto no elemento <p>
                document.getElementById("diaSemana").textContent = `Dia da semana: ${diaSemana}`;
            } else {
                // Caso a data seja limpa
                document.getElementById("diaSemana").textContent = "Nenhum dia selecionado";
            }
        }
    });
});
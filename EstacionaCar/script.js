let reservationCount = 0; // Contador de reservas
const maxReservations = 4; // Limite máximo de reservas
let idReservation = 1233;

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    if (reservationCount >= maxReservations) {
        alert("Você atingiu o limite máximo de reservas.");
        return;
    }

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const carModel = document.getElementById('car-model').value;
    const licensePlate = document.getElementById('license-plate').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Verifica se a data é válida
    const today = new Date().setHours(0, 0, 0, 0); // Data de hoje sem hora
    const selectedDate = new Date(date).setHours(0, 0, 0, 0); // Data selecionada sem hora

    if (selectedDate < today) {
        alert("A data não pode ser inferior ao dia de hoje.");
        return;
    }

    // Incrementa o contador de reservas
    reservationCount++;

    // Cria a mensagem de confirmação
    const confirmationMessage = `
        <h2>Reserva Confirmada!</h2>
        <p><strong>Código de Reserva:</strong> ${idReservation ++}</p>
        <p><strong>Nome:</strong> ${name} Pereira Alves</p>
        <p><strong>Modelo do Carro:</strong> ${carModel}</p>
        <p><strong>Placa do Carro:</strong> JPVD-2005</p>
        <p><strong>Data:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>

    `;

    // Exibe a mensagem de confirmação
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = confirmationMessage;
    confirmationDiv.style.display = 'block';

    // Exibe o botão de nova reserva e oculta o formulário
    document.getElementById('reservation-form').style.display = 'none';
    document.getElementById('new-reservation').style.display = 'block';
});

// Adiciona um evento de clique ao botão de nova reserva
document.getElementById('new-reservation').addEventListener('click', function() {
    // Oculta a mensagem de confirmação
    document.getElementById('confirmation').style.display = 'none';

    // Limpa os campos do formulário
    document.getElementById('reservation-form').reset();

    // Exibe o formulário e oculta o botão de nova reserva
    document.getElementById('reservation-form').style.display = 'flex';
    document.getElementById('new-reservation').style.display = 'none';
});

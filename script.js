const caminhonetes = ['CB113','CB114','CB115','CB117','CB118','CB125','CB127','CB128','CB132','CB135','CB138','CB141','CB142','CB143'];
const caminhoes = ['CB119','CB120','CB121','CB122','CB123','CB124','CB126','CB130','CB133','CB137','CB140','CB144'];

// SÓ EDITA AQUI. COLOCA E TIRA PRIORIDADE
const lugaresAdiantamento = ['PRIORIDADE 1', 'PRIORIDADE 2', 'PRIORIDADE 3', 'PRIORIDADE 4', 'PRIORIDADE 5'];

function abrirAba(id) {
  document.querySelectorAll('.aba').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function criarLista(containerId, lista) {
  const container = document.getElementById(containerId);
  lista.forEach(cb => {
    container.innerHTML += `
      <div class="item">
        <b>${cb}</b>
        <label>Disponibilidade:
          <select id="disp-${cb}">
            <option value="Apto ✅">Apto ✅</option>
            <option value="Indisponível ❌">Indisponível ❌</option>
            <option value="Manutenção">Manutenção</option>
          </select>
        </label>
        <label>Abastecimento:
          <select id="abast-${cb}">
            <option value="Abastecido por completo">Abastecido por completo</option>
            <option value="Falta abastecer">Falta abastecer</option>
            <option value="Falta completar">Falta completar</option>
          </select>
        </label>
      </div>
    `;
  });
}

function criarAdiantamento() {
  const container = document.getElementById('adiantamento-container');
  lugaresAdiantamento.forEach(lugar => {
    const id = lugar.toLower

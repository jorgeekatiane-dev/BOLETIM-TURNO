const caminhonetes = ['CB113','CB114','CB115','CB117','CB118','CB125','CB127','CB128','CB132','CB135','CB138','CB141','CB142','CB143'];
const caminhoes = ['CB119','CB120','CB121','CB122','CB123','CB124','CB126','CB130','CB133','CB137','CB140','CB144'];

// SÓ EDITA AQUI. PODE COLOCAR 6, 8, 10 LUGARES
const lugaresFuros = ['PRIORIDADE 1', 'PRIORIDADE 2', 'PRIORIDADE 3', 'PRIORIDADE 4', 'PRIORIDADE 5', 'PRIORIDADE 6'];

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

function criarFuros() {
  const container = document.getElementById('furos-container');
  lugaresFuros.forEach(lugar => {
    const id = lugar.toLowerCase().replace(/\s/g, '');
    container.innerHTML += `
      <label>${lugar} - Qtd Furos:
        <input type="number" id="${id}" placeholder="0">
      </label>
    `;
  });
}

function gerarRelatorio() {
  const turma = document.getElementById('turma').value;
  const data = document.getElementById('data').value;
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
  
  let texto = `TROCA DE TURNO:\n\nBoa noite, Turma!\nTroca de turno 3×3 Turma (${turma})\n*${dataFormatada}*\n\n`;
  
  [...caminhonetes, ...caminhoes].forEach(cb => {
    const disp = document.getElementById(`disp-${cb}`)?.value;
    const abast = document.getElementById(`abast-${cb}`)?.value;
    if(disp && abast) {
      texto += `*🚛.${cb}* \n${abast} \n${disp}\n\n`;
    }
  });
  
  texto += `QTD FUROS\n`;
  lugaresFuros.forEach(lugar => {
    const id = lugar.toLowerCase().replace(/\s/g, '');
    texto += `${lugar}: ${document.getElementById(id).value}\n`;
  });
  texto += `\n`;
  
  texto += `*UM ÓTIMO TURNO DE TRABALHO A TODOS*`;
  
  document.getElementById('saida').value = texto;
}

function copiar() {
  const saida = document.getElementById('saida');
  saida.select();
  document.execCommand('copy');
  alert('Relatório copiado!');
}

document.getElementById('data').valueAsDate = new Date();
criarLista('caminhonete', caminhonetes);
criarLista('caminhao', caminhoes);
criarFuros();

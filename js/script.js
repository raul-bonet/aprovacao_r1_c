let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

function formatarNota(valor) {
    const strValor = valor.toString();

    if (!strValor.includes('.') && strValor.length > 1) {
        return parseFloat(strValor.slice(0, -1) + '.' + strValor.slice(-1));
    }
    return parseFloat(valor);
}

document.getElementById('alunoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const nota1 = formatarNota(document.getElementById('nota1').value);
    const nota2 = formatarNota(document.getElementById('nota2').value);
    const nota3 = formatarNota(document.getElementById('nota3').value);
    const frequencia = parseInt(document.getElementById('frequencia').value);

    if (nota1 > 10 || nota2 > 10 || nota3 > 10 ||
        nota1 < 0 || nota2 < 0 || nota3 < 0) {
        alert('As notas devem estar entre 0 e 10!');
        return;
    }

    const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

    const aluno = {
        nome,
        nota1,
        nota2,
        nota3,
        media,
        frequencia
    };

    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));

    this.reset();

    alert('Aluno cadastrado com sucesso!');
});

document.getElementById('verAlunosBtn').addEventListener('click', function() {
    window.location.href = 'resultados.html';
});
// Armazenamento dos alunos
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

// Função para exibir os resultados na segunda página
document.addEventListener('DOMContentLoaded', function() {
    const corpoTabela = document.getElementById('corpoTabela');
    
    alunos.forEach(aluno => {
        const media = parseFloat(aluno.media);
        const frequencia = aluno.frequencia;
        
        let situacao;
        if (media >= 6 && frequencia >= 75) {
            situacao = 'Aprovado';
        } else {
            situacao = 'Reprovado';
        }
        
        const linha = document.createElement('tr');
        
        linha.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.nota1}</td>
            <td>${aluno.nota2}</td>
            <td>${aluno.nota3}</td>
            <td>${aluno.media}</td>
            <td>${aluno.frequencia}%</td>
            <td class="${situacao === 'Aprovado' ? 'aprovado' : 'reprovado'}">${situacao}</td>
        `;
        
        corpoTabela.appendChild(linha);
    });
});

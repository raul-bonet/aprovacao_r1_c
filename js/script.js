document.addEventListener('DOMContentLoaded', function() {
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    const corpoTabela = document.getElementById('corpoTabela');
    
    function carregarAlunos() {
        corpoTabela.innerHTML = ''; 
        
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
    }
    
    carregarAlunos();
    
    document.getElementById('voltarBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    document.getElementById('limparBtn').addEventListener('click', function() {
        if (confirm('Tem certeza que deseja apagar todos os alunos cadastrados?')) {
            localStorage.removeItem('alunos');
            corpoTabela.innerHTML = ''; 
            alert('Todos os alunos foram removidos com sucesso!');
        }
    });
});

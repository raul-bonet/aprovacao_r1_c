document.addEventListener('DOMContentLoaded', function() {
    const corpoTabela = document.getElementById('corpoTabela');
    let alunos = JSON.parse(localStorage.getItem('alunos')) || []; 

    function carregarTabela() {
        corpoTabela.innerHTML = ''; 
        
        if (alunos.length === 0) {
            corpoTabela.innerHTML = '<tr><td colspan="7">Nenhum aluno cadastrado ainda.</td></tr>';
            return;
        }

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

    carregarTabela();

    document.getElementById('limparTabela').addEventListener('click', function() {
        if (confirm('Tem certeza que deseja apagar todos os dados dos alunos?')) {
            localStorage.removeItem('alunos');
            alunos = []; 
            carregarTabela(); 
        }
    });
});
    let inpu = document.querySelector('#name');
    let pessoa = document.querySelector('.pessoa');
    let woman = document.querySelector('.woman');
    let men = document.querySelector('.man');
    let telaF = document.querySelector('.secontTela');

    woman.addEventListener('click', ()=>{
        let nameComplet = inpu.value;
        if(nameComplet.length == ''){
            alert('Por favor preecha o campo "NOME"')
        }else{
            telaF.style.display = 'flex'
            pessoa.innerHTML = `${nameComplet}`
        }
        
    });

    men.addEventListener('click', ()=>{
        alert('Hoje não e seu dia!! hahaha')
    });
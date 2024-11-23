let names = ['Link', 'Batman', 'Naruto', 'Arrascaeta', 'Pikachu', 'Felipao', 'Superman', 'Piu-piu'];
let exp = [980, 1050, 3000, 6025, 7500, 8999, 9456, 10001];
let classification = []

    names.forEach(name => {
        let nameHero = name;
        let expHero = exp[names.indexOf(name)]

        switch (true) {
            case (expHero < 1000):
                classification.push('Ferro')
                break;

            case (expHero > 1000 && expHero < 2001):
                classification.push('Bronze')
                break;

            case (expHero > 2000 && expHero < 5001):
                classification.push('Prata')
                break;

            case (expHero > 5000 && expHero < 7001):
                classification.push('Ouro')
                break;

            case (expHero > 7000 && expHero < 8001):
                classification.push('Platina')
                break;

            case (expHero > 8000 && expHero < 9001):
                classification.push('Ascendente')
                break;
        
            case (expHero > 9000 && expHero < 10001):
                classification.push('Imortal')
                break;
             
            case (expHero >= 10001):
                classification.push('Radiante')
                break;

            default:
                classification.push('Undefined')
                break;
        }
    
        console.log(`O Herói de nome ${name} está no nível de ${expHero} e classificação ${classification[names.indexOf(name)]}`)
    });

document.addEventListener('DOMContentLoaded', () => {
    
    const textFields = {
        'inputName': { display: 'displayName', default: 'NOME COMPLETO' },
        'inputNationality': { display: 'displayNationality', default: 'Nacionalidade' },
        'inputAddress': { display: 'displayAddress', default: 'Cidade-Estado' },
        'inputPhone': { display: 'displayPhone', default: '(00) 0 0000-0000' },
        'inputEmail': { display: 'displayEmail', default: 'email@exemplo.com' },
        'inputLinkedin': { display: 'displayLinkedin', default: 'linkedin.com/in/perfil' },
        'inputJobTitle': { display: 'displayJobTitle', default: 'TÍTULO PROFISSIONAL' }
    };

    const listFields = {
        'inputSummary': 'displaySummaryList',
        'inputEducation': 'displayEducationList',
        'inputLanguages': 'displayLanguagesList',
        'inputAdditional': 'displayAdditionalList'
    };

    function setupTextFields() {
        for (let id in textFields) {
            const input = document.getElementById(id);
            const config = textFields[id];
            const display = document.getElementById(config.display);

            if (input && display) {
                const update = () => {
                    display.textContent = input.value.trim() !== "" ? input.value : config.default;
                };
                input.addEventListener('input', update);
                update();
            }
        }
    }

    function setupListFields() {
        for (let id in listFields) {
            const input = document.getElementById(id);
            const display = document.getElementById(listFields[id]);

            if (input && display) {
                input.addEventListener('input', () => {
                    const lines = input.value.split('\n');
                    display.innerHTML = '';
                    const activeLines = lines.filter(line => line.trim() !== "");
                    
                    if (activeLines.length > 0) {
                        activeLines.forEach(line => {
                            const li = document.createElement('li');
                            li.textContent = line.trim();
                            display.appendChild(li);
                        });
                    } else {
                        display.innerHTML = '<li>...</li>';
                    }
                });
            }
        }
    }

    setupTextFields();
    setupListFields();

    // Botão de Impressão
    const printBtn = document.querySelector('.action-button');
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
});
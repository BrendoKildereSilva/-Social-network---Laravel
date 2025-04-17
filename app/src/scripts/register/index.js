const Dados = {
    "StatusSteps": {
        "step01": false,
        "step02": false,
        "step03": false
    }
}

const container_step_01 = document.getElementById('step-01')
const container_step_02 = document.getElementById('step-02')
const container_step_03 = document.getElementById('step-03')

export function ButtonNextStep01(){
    Dados.StatusSteps.step01 = true
    container_step_01.setAttribute('hidden', 'true')
    container_step_02.removeAttribute('hidden', 'true')
    container_step_03.setAttribute('hidden', 'true')
}

export function ButtonBackStep02(){
    Dados.StatusSteps.step01 = true
    container_step_01.removeAttribute('hidden', 'true')
    container_step_02.setAttribute('hidden', 'true')
    container_step_03.setAttribute('hidden', 'true')
}






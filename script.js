const selectionButton = document.querySelectorAll('[data-selection]')
const lastColumnToAddNewResult = document.querySelector('[data-last-column]')
const computerScore = document.querySelector('[data-computer-score]')
const yourScore = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name:'rock',
        emoji:'✊',
        beats:'scissor'
    },
    {
        name:'paper',
        emoji:'✋',
        beats:'rock'
    },
    {
        name:'scissor',
        emoji:'✌️',
        beats:'paper'
    }
]
selectionButton.forEach( selectionButton => {
    selectionButton.addEventListener('click' , (e)=>{
        const userSelection = selectionButton.dataset.selection;
        const computerSelectionInfo = getRandomSelection()
        const userSelectionInfo = SELECTIONS.find(selection => selection.name === userSelection)
        const isUserWinner = isWinner(userSelectionInfo , computerSelectionInfo)
        const isComputerWinner = isWinner(computerSelectionInfo , userSelectionInfo)
        console.log(computerSelectionInfo,userSelectionInfo, isUserWinner , isComputerWinner);
        
        createResultElement(computerSelectionInfo, isComputerWinner)
        createResultElement(userSelectionInfo , isUserWinner)

        if(isUserWinner) incrementScore(yourScore)
        if(isComputerWinner) incrementScore(computerScore)
    })
})



function getRandomSelection(){
    const randomIndex = Math.floor(Math.random() * 3)
    return SELECTIONS[randomIndex]
}

function isWinner(selectionInfo , opponentSelectionInfo){
    return selectionInfo.beats === opponentSelectionInfo.name
}

function createResultElement(result , winner){
    const element = document.createElement('div')
    lastColumnToAddNewResult.after(element)
    element.classList.add('result-selection')
    element.innerText = `${result.emoji}`
    if(winner) element.classList.add('winner')
    console.log(element);
}

function incrementScore(scoreSpanElement){
    const value = 1 + parseInt(scoreSpanElement.innerText)
    scoreSpanElement.innerText = `${value}`
}
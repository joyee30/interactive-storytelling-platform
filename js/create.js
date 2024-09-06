document.addEventListener('DOMContentLoaded', () => {
    const addBranchButton = document.getElementById('add-branch');
    const branchesDiv = document.getElementById('branches');
    
    addBranchButton.addEventListener('click', () => {
        const branchDiv = document.createElement('div');
        branchDiv.classList.add('branch');
        
        const optionLabel = document.createElement('label');
        optionLabel.innerText = 'Branch Text:';
        branchDiv.appendChild(optionLabel);
        
        const optionInput = document.createElement('input');
        optionInput.type = 'text';
        optionInput.name = 'branch-text';
        optionInput.placeholder = 'Branch Text';
        branchDiv.appendChild(optionInput);
        
        const optionChoice = document.createElement('input');
        optionChoice.type = 'text';
        optionChoice.name = 'branch-choice';
        optionChoice.placeholder = 'Next Story Path';
        branchDiv.appendChild(optionChoice);
        
        branchesDiv.appendChild(branchDiv);
    });
});

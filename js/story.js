// story.js

const storyData = {
    'A': {
        title: 'The Dense Jungle',
        text: 'You venture deeper into the jungle, where the sounds of wild animals grow louder. After an hour, you find a hidden cave. What will you do next?',
        options: [
            { text: 'Enter the cave', action: 'enterCave' },
            { text: 'Continue exploring the jungle', action: 'exploreJungle' }
        ]
    },
    'B': {
        title: 'The River Path',
        text: 'You follow the river and soon discover a boat tied to a tree. There are two paths: one leads to a waterfall, and the other to a mysterious island.',
        options: [
            { text: 'Sail to the waterfall', action: 'waterfall' },
            { text: 'Sail to the island', action: 'island' }
        ]
    },
    'enterCave': {
        title: 'The Secret Treasure',
        text: 'Inside the cave, you find a chest filled with gold and jewels. You have found the hidden treasure!',
        options: []
    },
    'exploreJungle': {
        title: 'The Jungle Mystery',
        text: 'As you continue exploring, you come across a strange artifact that might hold the key to a greater adventure.',
        options: []
    },
    'waterfall': {
        title: 'The Waterfall',
        text: 'You arrive at the waterfall and discover a hidden passage behind the falls. Do you want to explore it?',
        options: [
            { text: 'Explore the passage', action: 'explorePassage' },
            { text: 'Return to the river', action: 'returnRiver' }
        ]
    },
    'island': {
        title: 'The Mysterious Island',
        text: 'On the island, you find an ancient ruin with strange symbols. It might hold secrets to another adventure.',
        options: []
    },
    'explorePassage': {
        title: 'The Hidden Chamber',
        text: 'The passage leads to a hidden chamber filled with ancient relics. This could be the beginning of a new quest!',
        options: []
    },
    'returnRiver': {
        title: 'Back to the River',
        text: 'You return to the river and decide to head back to explore other parts of the jungle. Your adventure continues!',
        options: []
    }
};

function chooseOption(option) {
    const story = storyData[option];
    if (story) {
        document.getElementById('story-title').innerText = story.title;
        document.getElementById('story-text').innerText = story.text;
        
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = ''; // Clear previous options
        
        story.options.forEach(opt => {
            const btn = document.createElement('a');
            btn.href = '#';
            btn.className = 'option-btn';
            btn.innerText = opt.text;
            btn.onclick = () => chooseOption(opt.action);
            optionsDiv.appendChild(btn);
        });
    }
}

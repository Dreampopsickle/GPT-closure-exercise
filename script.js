
let count = 0;
let countHistory = [];
function clickCounter() {
    
    return function() {
        count += 1;
        document.getElementById('count').textContent = count; 
    };
}

function saveCount() {
    return function() {
        countHistory.push(count)
        document.getElementById('count-history').textContent = countHistory.join(' ');
        count = 0;
        document.getElementById('count').textContent = count;
    }
}


function clearHistory() {
    return function() {
        countHistory = [];
        document.getElementById('count-history').textContent = countHistory;
    };
}


const button = document.getElementById('clickMe');
const updateClickCount = clickCounter();

button.addEventListener('click', updateClickCount);

const saveButton = document.getElementById('save');
const updateClickHistory = saveCount();

saveButton.addEventListener('click', updateClickHistory);


const resetArray = document.getElementById('reset-history');
const historyReset = clearHistory();
resetArray.addEventListener('click', historyReset);


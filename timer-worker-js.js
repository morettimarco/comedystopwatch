let intervalId;
let totalTime;
let remainingTime;

self.onmessage = function(e) {
    if (e.data.command === 'start') {
        totalTime = e.data.totalTime;
        remainingTime = totalTime;
        clearInterval(intervalId);
        intervalId = setInterval(updateTimer, 1000);
    } else if (e.data.command === 'pause') {
        clearInterval(intervalId);
    }
};

function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        const progress = (totalTime - remainingTime) / totalTime;
        self.postMessage({ remainingTime, progress });
    } else {
        clearInterval(intervalId);
        self.postMessage({ remainingTime: 0, progress: 1 });
    }
}

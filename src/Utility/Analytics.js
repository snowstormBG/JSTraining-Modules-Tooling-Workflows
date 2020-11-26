const timeoutTime = 2000;

const intervalId = setInterval(() => {
        // eslint-disable-next-line no-console
        console.log('Sending analytics data...');
    },
    timeoutTime);

document.getElementById('stop-analytics-btn').addEventListener('click',
    () => {
        clearInterval(intervalId);
    });

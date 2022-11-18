window.addEventListener('load', () => {

    const computeDates = () => {
        // Assuming the website will go live the next first January
        var date_future = new Date(new Date().getFullYear() + 1, 0, 1);
        const date_now = new Date();

        // get total seconds between dates
        var delta = Math.abs(date_future - date_now) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 24;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = delta % 60;

        // Now insert computed values into our html
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = Math.floor(seconds);
    };

    // compute every 1s (1000ms)
    setInterval(() => {
        computeDates();
    }, 1000);

    // compute immediatly
    computeDates();
})
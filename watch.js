const data = {
    home: {
        title: "Home",
        content: "Welcome to your smartwatch!"
    },
    mail: {
        title: "Mail",
        content: "You have 3 new messages."
    },
    timer: {
        title: "Timer",
        content: "Set your timer here."
    },
    music: {
        title: "Music",
        content: "Now playing: 'Song Title'"
    }
};

function showHome() {
    updateScreen(data.home);
}

function showMail() {
    updateScreen(data.mail);
}

function showTimer() {
    updateScreen(data.timer);
}

function showMusic() {
    updateScreen(data.music);
}

function updateScreen(data) {
    document.getElementById('screen-title').innerText = data.title;
    document.getElementById('screen-content').innerText = data.content;
}

// Initialize with home screen
showHome();
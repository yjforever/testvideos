document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.querySelector('video'); // Get the first video element

    const videos = [
        'Video1.mp4',
        'Video2.mp4',
        'Video3.mp4',
        'Video4.mp4',
        'Video5.mp4',
        'Video6.mp4',
        // Add more video file paths here
    ];

    let currentVideoIndex = 0;

    function playVideo(index) {
        if (index >= 0 && index < videos.length) {
            videoPlayer.src = videos[index];
            videoPlayer.load(); // Important to reload the new source
            videoPlayer.play();
            currentVideoIndex = index;
        } else {
            console.warn(`Video index ${index + 1} is out of bounds.`);
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === '1') {
            playVideo(0);
        } else if (event.key === '2') {
            playVideo(1);
        } else if (event.key === '3') {
            playVideo(2);
        } else if (event.key === '4') {
            playVideo(3);
        } else if (event.key === '5') {
            playVideo(4);
        } else if (event.key === '6') {
            playVideo(5);
        }
        // Add more keybindings for additional videos if needed
        // Example for key '4':
        // else if (event.key === '4') {
        //     playVideo(3);
        // }
    });

    // Initially play the first video
    playVideo(0);
});

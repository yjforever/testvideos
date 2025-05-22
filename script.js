document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.querySelector('video'); // Get the first video element

    const videos = [
        'Video1.mp4',
        'Video2.mp4',
        'Video3.mp4',
        'Video4.mp4',
        'Video5.mp4',
        'Video6.mp4',
        'Video7.mp4',
        'Video8.mp4',
        'Video9.mp4',
        'Video10.mp4',
        'Video11.mp4',
        'Video12.mp4',
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
        else if (event.key === '7') {
            playVideo(6);
        }
        else if (event.key === '8') {
            playVideo(7);
        }
        else if (event.key === '9') {
            playVideo(8);
        }
        else if (event.key === '0') {
            playVideo(9);
        }
        else if (event.key === 'q') {
            playVideo(10);
        }
        else if (event.key === 'w') {
            playVideo(11);
        }
        else if (event.key === 'e') {
            playVideo(12);
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

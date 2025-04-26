document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('animationPlayer');
    const videos = [
        'video1.mp4',
        'video2.mp4',
        'video3.mp4',
        'video4.mp4'
    ];
    let currentVideoIndex = 0;

    function playVideo(index) {
        if (index >= 0 && index < videos.length) {
            videoPlayer.src = videos[index];
            videoPlayer.load(); // Important to reload the new source
            videoPlayer.play();
            currentVideoIndex = index;
            enterFullscreen(); // Re-enter fullscreen when a new video plays

            // Add event listener for looping the first video
            if (index === 0) {
                videoPlayer.addEventListener('ended', loopFirstVideo);
            } else {
                // Remove the loop listener for other videos
                videoPlayer.removeEventListener('ended', loopFirstVideo);
            }

        } else {
            console.warn(`Video index ${index + 1} is out of bounds.`);
        }
    }

    function loopFirstVideo() {
        videoPlayer.currentTime = 1; // Set the current time to 1 second
        videoPlayer.play();
    }

    function enterFullscreen() {
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.mozRequestFullScreen) { /* Firefox */
            videoPlayer.mozRequestFullScreen();
        } else if (videoPlayer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) { /* IE/Edge */
            videoPlayer.msRequestFullscreen();
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
        }
    });

    // Initially play the first video and enter fullscreen
    playVideo(0);
});
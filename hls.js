if (Hls.isSupported()) {
    var hls = new Hls({
        debug: true,
        startLevel: 3,  // Try starting at a lower or higher quality level
        maxBufferLength: 30,  // Reduce buffer length
    });
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
}

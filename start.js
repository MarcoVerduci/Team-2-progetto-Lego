// cambio della risorsa del video
const videoSource = document.getElementById('videoSource');

let sourceLarge = 'https://www.lego.com/cdn/cs/set/assets/bltb61a9205c8d48d11/1823-TitanPhase1-202305-Homepage-Hero-Standard-Large-Motion.mp4';
let sourceMedium = 'https://www.lego.com/cdn/cs/set/assets/blte2aad8c096e33c71/1823-TitanPhase1-202305-Homepage-Hero-Standard-Medium-Motion.mp4';
let sourceSmall = 'https://www.lego.com/cdn/cs/set/assets/bltda9f167c36efdd40/1823-TitanPhase1-202305-Homepage-Hero-Standard-Small-Motion.mp4';

function updateVideoSource() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 821) {
        videoSource.src = sourceLarge;
    } else if (screenWidth >= 361 && screenWidth <= 820) {
        videoSource.src = sourceMedium;
    } else if(screenWidth <= 360) {
        videoSource.src = sourceSmall;
    }
    document.getElementById('videoPlayer').load();
}

window.addEventListener('load', updateVideoSource);
window.addEventListener('resize', updateVideoSource);

// script pausa e play del video per telefono
const videoPlayerPhone = document.getElementById('videoPlayerPhone');
const videoButtonPhone = document.getElementById('videoButtonPhone');
const playIconPhone = document.getElementById('playIconPhone');
const playPauseTextPhone = document.getElementById('playPauseTextPhone');

function toggleVideoPhone() {
    if (videoPlayerPhone.paused) {
        videoPlayerPhone.play();
        playIconPhone.innerHTML = '<path stroke="#FFF" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M50 48.716c0 .71-.565 1.284-1.252 1.284h-8.49A1.269 1.269 0 0139 48.716V22.279c0-.71.56-1.279 1.257-1.279h8.49c.69 0 1.253.57 1.253 1.279v26.437zm-18 0c0 .71-.56 1.284-1.257 1.284h-8.488C21.563 50 21 49.426 21 48.716V22.279c0-.71.563-1.279 1.255-1.279h8.488c.697 0 1.257.57 1.257 1.279v26.437z"></path>';
        playPauseTextPhone.textContent = 'Pause video';
    } else {
        videoPlayerPhone.pause();
        playIconPhone.innerHTML = '<path stroke="#fff" stroke-opacity=".404" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M27.708 49.93c-.239 0-.475-.058-.69-.178a1.445 1.445 0 01-.768-1.28V21.528c0-.537.295-1.033.767-1.278a1.447 1.447 0 011.493.065l20.417 13.472a1.455 1.455 0 010 2.433L28.51 49.69a1.45 1.45 0 01-.802.24z"></path>';
        playPauseTextPhone.textContent = 'Play video';
    }
}

videoButtonPhone.addEventListener('click', toggleVideoPhone);

// script pausa e play del video per tablet e desktop
const videoPlayer = document.getElementById('videoPlayer');
const videoButton = document.getElementById('videoButton');
const playIcon = document.getElementById('playIcon');
const playPauseText = document.getElementById('playPauseText');

function toggleVideo() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playIcon.innerHTML = '<path stroke="#FFF" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M50 48.716c0 .71-.565 1.284-1.252 1.284h-8.49A1.269 1.269 0 0139 48.716V22.279c0-.71.56-1.279 1.257-1.279h8.49c.69 0 1.253.57 1.253 1.279v26.437zm-18 0c0 .71-.56 1.284-1.257 1.284h-8.488C21.563 50 21 49.426 21 48.716V22.279c0-.71.563-1.279 1.255-1.279h8.488c.697 0 1.257.57 1.257 1.279v26.437z"></path>';
        playPauseText.textContent = 'Pause video';
    } else {
        videoPlayer.pause();
        playIcon.innerHTML = '<path stroke="#fff" stroke-opacity=".404" d="M35 0C15.671 0 0 15.671 0 35s15.671 35 35 35 35-15.671 35-35S54.329 0 35 0z" opacity=".6"></path><path fill="#E0E0E0" d="M27.708 49.93c-.239 0-.475-.058-.69-.178a1.445 1.445 0 01-.768-1.28V21.528c0-.537.295-1.033.767-1.278a1.447 1.447 0 011.493.065l20.417 13.472a1.455 1.455 0 010 2.433L28.51 49.69a1.45 1.45 0 01-.802.24z"></path>';
        playPauseText.textContent = 'Play video';
    }
}

videoButton.addEventListener('click', toggleVideo);

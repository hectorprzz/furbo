document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#transmitir").addEventListener("click", (e) => {
        const container = document.querySelector("#container")
        const video = document.createElement("video")
        container.appendChild(video)
        const options = {
            video:true,
        }
        window.navigator.mediaDevices.getDisplayMedia(options)
            .then(stream =>{
                video.srcObject = stream
                video.play()
            })
            .catch(err => console.log(err))
    })
})
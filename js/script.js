let photos = []
const containerElem = document.getElementById("container")

const generatePhoto = () => {
    let photInner = "";
    photos.forEach(curPhoto => {
        photInner += `
        <div class="col-3 bg-light p-2 card mt-4">
            <img class="photo" src="${curPhoto.url}" alt="">
            <img class="dott" src="./img/pin.svg" alt="">
            <section>${curPhoto.title}</section>
        </div>
        `
    })
    containerElem.innerHTML = photInner;
}

axios
    .get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(resp => {
        console.log(resp.data);
        photos = resp.data;
        generatePhoto();
    })
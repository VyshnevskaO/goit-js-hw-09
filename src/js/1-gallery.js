import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    // overlay: true,
    // overlayOpacity: .8, ? як змінити колір everlay? окремий клас в styles?
});


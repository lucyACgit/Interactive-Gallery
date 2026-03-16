const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1773539649767-98dc585833fa?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773539649767-98dc585833fa?w=1600&q=80",
    name: "Cherry Blossoms",
    description: "Cherry blossoms against a bright blue sky",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1773385056696-58a0b34d8723?w=400&q=80",
    hd: "https://plus.unsplash.com/premium_photo-1773385056696-58a0b34d8723?w=1600&q=80",
    name: "Love letter",
    description: "A love letter with a red heart on top ",
  },
  {
    src: "https://images.unsplash.com/photo-1773394343278-21f63954867e?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773394343278-21f63954867e?w=1600&q=80",
    name: "A beautiful girl",
    description: "A beautiful girl standing under a tree",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1773277369068-8488542c42ee?w=400&q=80",
    hd: "https://plus.unsplash.com/premium_photo-1773277369068-8488542c42ee?w=1600&q=80",
    name: "Life",
    description: "An artistic photo of a tree",
  },
  {
    src: "https://images.unsplash.com/photo-1773496396339-447f78cc8fac?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773496396339-447f78cc8fac?w=1600&q=80",
    name: "The girl",
    description: "A girl with a sad face",
  },
  {
    src: "https://images.unsplash.com/photo-1773496396202-195e92545dea?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773496396202-195e92545dea?w=1600&q=80",
    name: "Road",
    description: "A black and white photo of a way to the underground",
  },
  {
    src: "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?w=1600&q=80",
    name: "Family",
    description: "A family of five standing in the park",
  },
  {
    src: "https://images.unsplash.com/photo-1771736813330-46491cbd9736?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1771736813330-46491cbd9736?w=1600&q=80",
    name: "Cool",
    description: "A girl with a cool look standing in the street",
  },
  {
    src: "https://images.unsplash.com/photo-1773270580250-130add80e26b?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773270580250-130add80e26b?w=1600&q=80",
    name: "Walking alone",
    description: "A security person walking alone in the street",
  },
  {
    src: "https://images.unsplash.com/photo-1771030668418-390b3edf33e4?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1771030668418-390b3edf33e4?w=1600&q=80",
    name: "Japan",
    description: "A photo of street in Japan without people",
  },
  {
    src: "https://images.unsplash.com/photo-1773182124784-63f642db8937?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773182124784-63f642db8937?w=1600&q=80",
    name: "Red vintage car",
    description: "A red vintage car parked on the street",
  },
  {
    src: "https://images.unsplash.com/photo-1773176637844-afc26168ba78?w=400&q=80",
    hd: "https://images.unsplash.com/photo-1773176637844-afc26168ba78?w=1600&q=80",
    name: "Sunset",
    description: "A beautiful sunset with a silhouette of a tree",
  },
];

// Use forEach to create element and append images to the gallery
galleryImages.forEach((imageData) => {
  const img = document.createElement("img");
  img.src = imageData.src;
  img.setAttribute("data-hd", imageData.hd);
  img.setAttribute(
    "data-caption",
    `${imageData.name}: ${imageData.description}`,
  );
  img.alt = imageData.name;
  gallery.appendChild(img);
});

// Event delegation for gallery
gallery.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const hdSrc = e.target.getAttribute("data-hd");
    const caption = e.target.getAttribute("data-caption");
    modalImage.src = hdSrc;
    modalCaption.textContent = caption;
    modal.classList.add("show");
  }
});

// Close modal when clicking on the image
modalImage.addEventListener("click", function () {
  modal.classList.remove("show");
});

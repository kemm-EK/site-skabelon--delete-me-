const eventMap = document.querySelector(".mingle-map");

if (eventMap) {
  console.log("eventmap");
  const firstDetails = document.querySelector("#details-first");
  const secondDetails = document.querySelector("#details-second");
  const thirdDetails = document.querySelector("#details-third");
  const fourthDetails = document.querySelector("#details-fourth");
  const gnome = document.querySelector(".gnome");

  function updateSvgPosition() {
    console.log("update");
    const openDetails = document.querySelector(".accordion-item[open]");

    if (openDetails) {
      eventMap.dataset.position = openDetails.dataset.position;
    } else {
      delete eventMap.dataset.position;
    }
  }
  function highlightSpot1() {
    const picked = document.querySelector(".location-tea");
    if (picked.classList.contains("bright")) {
      picked.classList.remove("bright");
      gnome.classList.remove("spot1");
      picked.classList.add("semi-transparent");
    } else {
      picked.classList.add("bright");
      gnome.classList.add("spot1");
      picked.classList.remove("semi-transparent");
      console.log(picked.dataset);
    }
  }
  function highlightSpot2() {
    const picked = document.querySelector(".location-tinker");
    if (picked.classList.contains("bright")) {
      picked.classList.remove("bright");
      gnome.classList.remove("spot2");
      picked.classList.add("semi-transparent");
    } else {
      picked.classList.add("bright");
      gnome.classList.add("spot2");
      picked.classList.remove("semi-transparent");
    }
  }
  function highlightSpot3() {
    const picked = document.querySelector(".location-story");
    console.log(picked);
    if (picked.classList.contains("bright")) {
      picked.classList.remove("bright");
      gnome.classList.remove("spot3");
      picked.classList.add("semi-transparent");
    } else {
      picked.classList.add("bright");
      gnome.classList.add("spot3");
      picked.classList.remove("semi-transparent");
    }
  }
  function highlightSpot4() {
    const picked = document.querySelector(".location-moonlight");
    console.log(picked);
    if (picked.classList.contains("bright")) {
      picked.classList.remove("bright");
      gnome.classList.remove("spot4");
      picked.classList.add("semi-transparent");
    } else {
      picked.classList.add("bright");
      gnome.classList.add("spot4");
      picked.classList.remove("semi-transparent");
    }
  }

  firstDetails.addEventListener("toggle", highlightSpot1);
  secondDetails.addEventListener("toggle", highlightSpot2);
  thirdDetails.addEventListener("toggle", highlightSpot3);
  fourthDetails.addEventListener("toggle", highlightSpot4);
}

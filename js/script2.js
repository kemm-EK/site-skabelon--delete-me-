// SVG
const eventMap = document.querySelector(".event-map");

if (eventMap) {
  const firstDetails = document.querySelector("#details-first");
  const secondDetails = document.querySelector("#details-second");
  const thirdDetails = document.querySelector("#details-third");
  const fourthDetails = document.querySelector("#details-fourth");

  function updateSvgPosition() {
    const openDetails = document.querySelector(".accordion-item[open]");

    if (openDetails) {
      eventMap.dataset.position = openDetails.dataset.position;
    } else {
      delete eventMap.dataset.position;
    }
  }

  firstDetails.addEventListener("toggle", updateSvgPosition);
  secondDetails.addEventListener("toggle", updateSvgPosition);
  thirdDetails.addEventListener("toggle", updateSvgPosition);
  fourthDetails.addEventListener("toggle", updateSvgPosition);
}

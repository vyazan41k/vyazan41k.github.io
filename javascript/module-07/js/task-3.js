const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryHtml = document.querySelector("#gallery");

const createList = images.map((element) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", element.url), ("alt", element.alt);
  img.style = "display: flex; width: 400px; height: 200px";
  li.append(img);
  return li;
});

galleryHtml.append(...createList);

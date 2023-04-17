const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const personName = document.getElementById("author");
const personJob = document.getElementById("job");
const personInfo = document.getElementById("info");
const personImg = document.getElementById("person-img");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const supriseBtn = document.querySelector(".random-btn");

let idSet = 1;

function displayData(e) {
  idSet === 1 && (prevBtn.disabled = true);
  personImg.src = e.img;
  personName.textContent = e.name;
  personJob.textContent = e.job;
  personInfo.textContent = e.text;
}

supriseBtn.addEventListener("click", function () {
  idSet = Math.trunc(Math.random() * reviews.length + 1);
  reviews.forEach((e) => {
    if (e.id === idSet) {
      displayData(e);
    }
  });
  idSet === reviews.length
    ? (nextBtn.disabled = true)
    : (nextBtn.disabled = false);
  idSet === 1 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
});

nextBtn.addEventListener("click", function () {
  prevBtn.disabled = false;
  ++idSet;
  idSet <= reviews.length &&
    reviews.forEach((e) => {
      if (e.id === idSet) {
        displayData(e);
      }
    });
  idSet === reviews.length && (nextBtn.disabled = true);
});

prevBtn.addEventListener("click", function () {
  nextBtn.disabled = false;
  --idSet;
  console.log(idSet);
  idSet >= 1 &&
    reviews.forEach((e) => {
      if (e.id === idSet) {
        displayData(e);
      }
    });
  idSet === 1 && (prevBtn.disabled = true);
});
window.addEventListener("load", displayData(reviews[0]));

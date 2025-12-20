
const testimonials = [
  {
    img: "./assets/images/Mask Group 4.webp",
    name: "Firedmen Artistry",
    rating: "★★★★☆",
    month: "4 months ago",
    review: "My Wife Kandi, Myself, and Mother in Law flew in from Cleveland, Ohio and booked a table for dinner and dancing on Tuesday night! It turned out to be a Fabulous Night Here! The Dinner was Great, and served by an attentive."
  },
  {
    img: "./assets/images/Mask Group 2.webp",
    name: "Sharell McMarry",
    rating: "★★★★★",
    month: "2 months ago",
    review: "We booked a dinner for my birthday celebration. The food was delicious, the servers were super attentive, and the overall ambiance was perfect. It felt very special and memorable. Definitely coming back soon!"
  },
  {
    img: "./assets/images/Mask Group 3.webp",
    name: "Agela Moe",
    rating: "★★★★☆",
    month: "6 months ago",
    review: "Our family had a wonderful evening here. The table service was prompt, and the staff made sure we had everything we needed. The music and dancing added a fun vibe. We’ll definitely recommend this place to our friends and relatives."
  },
  {
    img: "./assets/images/Mask Group 5.webp",
    name: "Kristin Kaplus",
    rating: "★★★★★",
    month: "1 month ago",
    review: "Fantastic experience! The staff went above and beyond to make us feel welcome. Dinner was delicious, the atmosphere was lively, and the entertainment kept everyone engaged. A perfect night out!"
  }
];

// Get the container div
const container = document.getElementById("reviewsContainer");

// Loop through testimonials and create HTML for each
testimonials.forEach(testimonial => {
  const div = document.createElement("div");
  div.className = "reviewBox1";
  div.innerHTML = `
    <div class="reviewBoxTop">
      <img src="${testimonial.img}" alt="customer image" loading="lazy" />
      <div class="reviewInfo">
        <h3>${testimonial.name}</h3>
        <p><span>${testimonial.rating}</span> ${testimonial.month}</p>
      </div>
    </div>
    <div class="reviewBoxBottom">
      <p>${testimonial.review}</p>
    </div>
  `;
  container.appendChild(div);
});

// Main script file for Adventurous Tour Website

document.addEventListener("DOMContentLoaded", function () {
	console.log("Website loaded successfully!");

	// Custom Carousel Logic
	const carousel = document.getElementById("customCarousel");
	if (carousel) {
		const images = carousel.querySelectorAll(".carousel-img");
		const indicators = carousel.querySelectorAll(".indicator");
		let current = 0;
		function showSlide(idx) {
			images.forEach((img, i) => {
				img.classList.toggle("active", i === idx);
				indicators[i].classList.toggle("active", i === idx);
			});
			current = idx;
		}
		carousel.querySelector("#carouselPrev").onclick = function () {
			showSlide((current - 1 + images.length) % images.length);
		};
		carousel.querySelector("#carouselNext").onclick = function () {
			showSlide((current + 1) % images.length);
		};
		indicators.forEach((ind, i) => {
			ind.onclick = () => showSlide(i);
		});
		// Optional: auto-slide
		setInterval(() => showSlide((current + 1) % images.length), 5000);
	}

	// Book Now button dummy action
	document.querySelectorAll(".book-btn").forEach((btn) => {
		btn.addEventListener("click", function () {
			alert("Booking feature coming soon!");
		});
	});
});

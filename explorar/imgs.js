// document.addEventListener("DOMContentLoaded", function() {
// 	const imageContainers = document.querySelectorAll(".image-container1, .image-container2, .image-container3, .image-container4, .image-container5");
// 	const modal = document.querySelector(".modal1");
// 	const modalContent = document.querySelector(".modal-content1");
// 	const closeBtn = document.querySelector(".close-button1");

// 	imageContainers.forEach(container => {
// 		container.addEventListener("click", function() {
// 			modal.style.display = "flex";
// 			modalContent.src = container.querySelector("img").src;
// 		});
// 	});

// 	closeBtn.addEventListener("click", function() {
// 		modal.style.display = "none";
// 	});

// 	window.addEventListener("click", function(event) {
// 		if (event.target === modal) {
// 			modal.style.display = "none";
// 		}
// 	});
// });

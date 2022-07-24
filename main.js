const navLinks = document.querySelectorAll(".navLink");

for (const navLink of navLinks) {
	navLink.addEventListener("click", () => {
		navLinks.forEach(navLink => navLink.classList.remove("active"));
		document.getElementById("checkbox").checked = false;
		navLink.classList.add("active");
	});
}

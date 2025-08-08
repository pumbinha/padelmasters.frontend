// Function to initialize filtering
function initializeFiltering() {
	const filterButtons = document.querySelectorAll("[data-filter]");
	const matchesContainer = document.getElementById("matches-container");
	const noMatchesMessage = document.getElementById("no-matches-message");

	if (!filterButtons.length || !matchesContainer) return;

	// Remove old event listeners by cloning buttons
	filterButtons.forEach((button) => {
		const newButton = button.cloneNode(true);
		button.parentNode?.replaceChild(newButton, button);
	});

	// Get fresh references after cloning
	const freshFilterButtons = document.querySelectorAll("[data-filter]");

	freshFilterButtons.forEach((button) => {
		button.addEventListener("click", function (e) {
			e.preventDefault();
			const target = e.currentTarget;
			if (!target) return;

			const filter = target.getAttribute("data-filter");
			if (!filter) return;

			// Update active button
			freshFilterButtons.forEach((btn) => {
				if (btn) {
					btn.classList.remove(
						"bg-white/60",
						"text-black",
						"border-white/70",
						"shadow-xl",
						"font-semibold"
					);
					btn.classList.add(
						"bg-white/10",
						"text-white/80",
						"hover:bg-white/20",
						"border-white/20",
						"shadow-sm"
					);
				}
			});
			target.classList.remove(
				"bg-white/10",
				"text-white/80",
				"hover:bg-white/20",
				"border-white/20",
				"shadow-sm"
			);
			target.classList.add(
				"bg-white/60",
				"text-black",
				"border-white/70",
				"shadow-xl",
				"font-semibold"
			);

			// Show/hide matches based on filter
			const matchElements = matchesContainer.querySelectorAll("[data-match]");
			let visibleCount = 0;

			matchElements.forEach((matchElement) => {
				const matchStatus = matchElement.getAttribute("data-match-status");
				const isVisible = filter === "All" || matchStatus === filter;

				if (isVisible) {
					matchElement.style.opacity = "1";
					matchElement.style.transform = "scale(1)";
					matchElement.style.height = "";
					matchElement.style.maxHeight = "";
					matchElement.style.marginTop = "";
					matchElement.style.marginBottom = "";
					matchElement.style.paddingTop = "";
					matchElement.style.paddingBottom = "";
					matchElement.style.pointerEvents = "auto";
					matchElement.style.overflow = "";
					visibleCount++;
				} else {
					matchElement.style.opacity = "0";
					matchElement.style.transform = "scaleY(0)";
					matchElement.style.height = "0";
					matchElement.style.maxHeight = "0";
					matchElement.style.marginTop = "0";
					matchElement.style.marginBottom = "0";
					matchElement.style.paddingTop = "0";
					matchElement.style.paddingBottom = "0";
					matchElement.style.pointerEvents = "none";
					matchElement.style.overflow = "hidden";
				}
			});

			// Collapse/expand matches container based on visible count
			if (visibleCount === 0) {
				matchesContainer.style.height = "0";
				matchesContainer.style.maxHeight = "0";
				matchesContainer.style.overflow = "hidden";
				matchesContainer.style.marginTop = "0";
				matchesContainer.style.marginBottom = "0";
				matchesContainer.style.paddingTop = "0";
				matchesContainer.style.paddingBottom = "0";
			} else {
				matchesContainer.style.height = "";
				matchesContainer.style.maxHeight = "";
				matchesContainer.style.overflow = "";
				matchesContainer.style.marginTop = "";
				matchesContainer.style.marginBottom = "";
				matchesContainer.style.paddingTop = "";
				matchesContainer.style.paddingBottom = "";
			}

			// Show/hide no matches message
			if (noMatchesMessage) {
				if (visibleCount === 0) {
					noMatchesMessage.style.display = "";
					noMatchesMessage.style.opacity = "1";
					noMatchesMessage.style.transform = "scale(1)";
					noMatchesMessage.style.height = "";
					noMatchesMessage.style.maxHeight = "";
					noMatchesMessage.style.marginTop = "";
					noMatchesMessage.style.marginBottom = "";
					noMatchesMessage.style.paddingTop = "";
					noMatchesMessage.style.paddingBottom = "";
					noMatchesMessage.style.pointerEvents = "auto";
					noMatchesMessage.style.overflow = "";
				} else {
					noMatchesMessage.style.display = "none";
					noMatchesMessage.style.opacity = "0";
					noMatchesMessage.style.transform = "scaleY(0)";
					noMatchesMessage.style.height = "0";
					noMatchesMessage.style.maxHeight = "0";
					noMatchesMessage.style.marginTop = "0";
					noMatchesMessage.style.marginBottom = "0";
					noMatchesMessage.style.paddingTop = "0";
					noMatchesMessage.style.paddingBottom = "0";
					noMatchesMessage.style.pointerEvents = "none";
					noMatchesMessage.style.overflow = "hidden";
				}
			}

			// Update URL without page reload
			const url = new URL(window.location.href);
			if (filter === "All") {
				url.searchParams.delete("status");
			} else {
				url.searchParams.set("status", filter);
			}
			window.history.pushState({}, "", url);
		});
	});

	// Set initial filter based on URL or default to 'Planned'
	const urlParams = new URLSearchParams(window.location.search);
	const initialFilter = urlParams.get("status") || "Planned";

	// Find and click the appropriate button
	const initialButton = Array.from(freshFilterButtons).find(
		(btn) => btn.getAttribute("data-filter") === initialFilter
	);

	if (initialButton) {
		initialButton.click();
	}
}

// Initialize filtering on various events to ensure it works after navigation
document.addEventListener("DOMContentLoaded", initializeFiltering);
document.addEventListener("visibilitychange", () => {
	setTimeout(initializeFiltering, 100);
});
window.addEventListener("load", initializeFiltering);
window.addEventListener("focus", () => {
	setTimeout(initializeFiltering, 100);
});

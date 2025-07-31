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
					btn.classList.remove("bg-[#1F3851]", "text-white", "shadow-md");
					btn.classList.add(
						"bg-gray-200",
						"text-gray-700",
						"hover:bg-gray-300",
						"border",
						"border-gray-300",
						"shadow-sm"
					);
				}
			});
			target.classList.remove(
				"bg-gray-200",
				"text-gray-700",
				"hover:bg-gray-300",
				"border",
				"border-gray-300",
				"shadow-sm"
			);
			target.classList.add("bg-[#1F3851]", "text-white", "shadow-md");

			// Show/hide matches based on filter
			const matchElements = matchesContainer.querySelectorAll("[data-match]");
			let visibleCount = 0;

			matchElements.forEach((matchElement) => {
				const matchStatus = matchElement.getAttribute("data-match-status");
				const isVisible = filter === "All" || matchStatus === filter;

				if (isVisible) {
					matchElement.style.display = "block";
					visibleCount++;
				} else {
					matchElement.style.display = "none";
				}
			});

			// Show/hide no matches message
			if (noMatchesMessage) {
				if (visibleCount === 0) {
					noMatchesMessage.style.display = "block";
				} else {
					noMatchesMessage.style.display = "none";
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

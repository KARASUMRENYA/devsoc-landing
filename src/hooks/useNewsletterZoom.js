import { useState, useEffect } from "react";

export function useNewsletterZoom(imagesLength) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [visibleImageIndex, setVisibleImageIndex] = useState(0);

	// Track which image is visible in mobile scroll
	useEffect(() => {
		const handleScroll = (e) => {
			const container = e.target;
			const scrollLeft = container.scrollLeft;
			const containerWidth = container.offsetWidth;
			const scrollWidth = container.scrollWidth;
			const imageWidth = 288 + 16;

			const isAtEnd = scrollLeft + containerWidth >= scrollWidth - 10;

			if (isAtEnd) {
				setVisibleImageIndex(imagesLength - 1);
			} else {
				const index = Math.round(scrollLeft / imageWidth);
				setVisibleImageIndex(Math.min(index, imagesLength - 1));
			}
		};

		const scrollContainer = document.querySelector(".mobile-scroll-container");
		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
			return () => scrollContainer.removeEventListener("scroll", handleScroll);
		}
	}, [imagesLength]);

	// Lock body scroll when zoomed
	useEffect(() => {
		if (isZoomed) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isZoomed]);

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
	};

	const goToImage = (index) => {
		setCurrentImageIndex(index);
	};

	const toggleZoom = () => {
		setIsZoomed(!isZoomed);
	};

	const openZoom = (index) => {
		setCurrentImageIndex(index);
		setIsZoomed(true);
	};

	return {
		currentImageIndex,
		isZoomed,
		visibleImageIndex,
		nextImage,
		prevImage,
		goToImage,
		toggleZoom,
		openZoom,
	};
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({ onLoadComplete }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const minLoadTime = 2000; 
		const startTime = Date.now();

		const checkLoading = () => {
			const elapsedTime = Date.now() - startTime;

			if (elapsedTime >= minLoadTime) {
				setIsLoading(false);
				setTimeout(() => {
					onLoadComplete?.();
				}, 500); 
			} else {
				setTimeout(checkLoading, 100);
			}
		};

		checkLoading();
	}, [onLoadComplete]);

	if (!isLoading) return null;

	return (
		<div
			className={`fixed inset-0 z-500 flex items-center justify-center bg-orange-100 transition-opacity duration-500 ${
				isLoading ? "opacity-100" : "pointer-events-none opacity-0"
			}`}
		>
			<div className="relative">
				<div className="animate-spin-slow">
					<Image
						src="/DevSocLogo.png"
						alt="DevSoc Logo"
						width={150}
						height={150}
						priority
						className="drop-shadow-lg"
					/>
				</div>

				<div className="animate-pulse-ring absolute inset-0 -m-4 rounded-full border-4 border-orange-300 opacity-50" />
				<div className="animate-pulse-ring-delayed absolute inset-0 -m-8 rounded-full border-4 border-orange-200 opacity-30" />
			</div>
		</div>
	);
}

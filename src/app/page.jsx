"use client";

import { useState } from "react";
import Events from "@/components/Home/Events";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Gallery from "@/components/Home/Gallery";
import LoadingScreen from "@/components/Home/LoadingScreen";

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<LoadingScreen onLoadComplete={() => setIsLoaded(true)} />
			<div
				className={`mx-auto flex max-w-[1800px] flex-col items-center justify-center bg-neutral-50 transition-opacity duration-700 ${
					isLoaded ? "opacity-100" : "opacity-0"
				}`}
			>
				<Hero />
				<Newsletter />
				<Events />
				<Gallery />
			</div>
		</>
	);
}

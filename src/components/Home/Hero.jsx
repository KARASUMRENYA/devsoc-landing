"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
	const headerVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			filter: "blur(10px)",
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const imageVariants = {
		hidden: {
			opacity: 0,
			y: 100,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				delay: 0.3,
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};
	return (
		<div className="from-accent/50 relative flex w-full flex-col items-center gap-12 bg-linear-to-t to-transparent px-4 pt-4">
			<div className="flex h-100 w-full flex-col items-center justify-end pb-8 text-center sm:h-80 sm:pb-0">
				<motion.h1
					variants={headerVariants}
					initial="hidden"
					whileInView="visible"
					className="text-4xl font-bold sm:text-6xl"
				>
					Welcome to Dev<span className="text-orange-300">Soc</span>
				</motion.h1>
				<motion.h2
					variants={headerVariants}
					initial="hidden"
					whileInView="visible"
					className="text-lg sm:text-2xl"
				>
					Join our inclusive community
				</motion.h2>
			</div>
			<motion.div
				variants={imageVariants}
				initial="hidden"
				whileInView="visible"
			>
				<Image
					src="/DevsocHero.png"
					alt="DevSoc Hero Image"
					width={505}
					height={419}
					className="w-md"
				/>
			</motion.div>
			<div className="absolute bottom-0 z-2 w-full bg-black sm:h-10"></div>
		</div>
	);
}

"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { galleryItems } from "@/constant/gallery";
import Image from "next/image";

export default function Gallery() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const galleryScale = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.9, 1, 0.9],
	);
	const galleryBlur = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, 8]);

	const headerVariants = {
		hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	return (
		<section ref={ref} className="w-full pt-8 pb-24">
			<div className="mx-auto max-w-6xl px-4">
				<motion.h2
					variants={headerVariants}
					initial="hidden"
					whileInView="visible"
					className="font-iceland mb-12 text-6xl font-bold"
				>
					Gallery
				</motion.h2>

				<motion.div
					style={{ scale: galleryScale, filter: galleryBlur }}
					className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
				>
					{galleryItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							whileHover={{ scale: 1.03 }}
							className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
								className="bg-neutral-700 object-cover transition-all duration-200 group-hover:brightness-75"
								priority={index < 2} // loads first few images eagerly
							/>

							<div className="absolute inset-0 flex items-end bg-linear-to-t from-black to-transparent to-60% p-4">
								<div className="flex w-full items-center justify-between">
									<h3 className="text-lg font-semibold text-white">
										{item.title}
									</h3>
									<ChevronRight className="h-5 w-5 text-white transition group-hover:translate-x-1" />
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

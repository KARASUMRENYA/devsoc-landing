"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { fadeInBlur } from "@/lib/motionVariants";

export default function NewsletterDesktopGrid({ images, title, onImageClick }) {
	return (
		<motion.div
			className="hidden grid-cols-2 gap-6 md:grid"
			variants={fadeInBlur}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{images.map((image, index) => (
				<motion.div
					key={index}
					className="group relative w-full cursor-zoom-in overflow-hidden"
					onClick={() => onImageClick(index)}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 * index }}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<Image
						src={image}
						alt={`${title} image ${index + 1}`}
						width={1200}
						height={1600}
						className="h-auto w-full rounded-3xl object-cover"
						priority={index < 2}
					/>
					<motion.div
						className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100"
						initial={{ opacity: 0 }}
						whileHover={{ scale: 1.1 }}
					>
						<ZoomIn size={20} />
					</motion.div>
				</motion.div>
			))}
		</motion.div>
	);
}

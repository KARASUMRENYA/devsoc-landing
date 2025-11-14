"use client";

import { motion } from "motion/react";
import { fadeInBlur } from "@/lib/motionVariants";

export default function ActivityCard({ activity, index }) {
	const Icon = activity.icon;

	return (
		<motion.div
			key={index}
			variants={fadeInBlur}
			whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
			className="group rounded-2xl bg-neutral-900 p-6 text-center transition-all duration-200 hover:bg-neutral-800/80 "
		>
			<div className="mb-4 flex justify-center">
				<motion.div className="bg-accent/40 group-hover:bg-accent/70 rounded-full p-4">
					<motion.div
						whileHover={{
							rotate: [0, -10, 10, -10, 0],
							scale: [1, 1.01, 1.01, 1.01, 1],
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
					>
						<Icon className="text-accent h-8 w-8 transition-colors group-hover:text-orange-200" />
					</motion.div>
				</motion.div>
			</div>
			<h3 className="text-lg font-semibold text-white">{activity.title}</h3>
		</motion.div>
	);
}

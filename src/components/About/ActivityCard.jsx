"use client";

import { motion } from "motion/react";
import { fadeInBlur } from "@/lib/motionVariants";

export default function ActivityCard({ activity, index }) {
	const Icon = activity.icon;

	return (
		<motion.div
			key={index}
			variants={fadeInBlur}
			whileHover={{ scale: 1.05, y: -5 }}
			className="group rounded-2xl bg-neutral-900 p-6 text-center transition-all duration-300 hover:bg-neutral-800"
		>
			<div className="mb-4 flex justify-center">
				<motion.div
					className="rounded-full bg-orange-300/10 p-4"
					whileHover={{
						backgroundColor: "rgba(253, 186, 116, 0.2)",
						scale: 1.1,
					}}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						whileHover={{
							rotate: [0, -10, 10, -10, 0],
							scale: [1, 1.1, 1.1, 1.1, 1],
						}}
						transition={{
							duration: 0.5,
							ease: "easeInOut",
						}}
					>
						<Icon className="h-8 w-8 text-orange-300 transition-colors group-hover:text-orange-200" />
					</motion.div>
				</motion.div>
			</div>
			<h3 className="text-lg font-semibold text-white">{activity.title}</h3>
		</motion.div>
	);
}

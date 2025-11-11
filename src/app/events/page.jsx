"use client";

import EventCard from "@/components/Events/EventCard";
import { eventsData } from "@/constant/events";
import { motion } from "motion/react";
import { fadeInBlur, staggerContainer } from "@/lib/motionVariants";

export default function Page() {
	return (
		<div className="min-h-screen w-full bg-black text-white">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-8 md:py-24">
				<div className="mb-12 w-full text-center">
					<motion.h1
						className="font-iceland mb-1 text-6xl font-bold"
						variants={fadeInBlur}
						initial="hidden"
						animate="visible"
					>
						Events
					</motion.h1>
					<motion.p
						className="text-xl text-neutral-200"
						variants={fadeInBlur}
						initial="hidden"
						animate="visible"
					>
						Where Technology Meets Creativity and Collaboration
					</motion.p>
				</div>

				<motion.div
					className="grid w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{eventsData.map((event) => (
						<motion.div key={event.slug} variants={fadeInBlur}>
							<EventCard event={event} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}

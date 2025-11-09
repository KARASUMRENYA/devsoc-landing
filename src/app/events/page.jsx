"use client";

import EventCard from "@/components/Events/EventCard";
import { eventsData } from "@/constant/events";
import { motion } from "motion/react";

const headerVariants = {
	hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function Page() {
	return (
		<div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center bg-black text-white">
			<div className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 bg-black p-4 pt-24 pb-16 sm:pb-24">
				<div>
					<motion.h1
						className="font-iceland w-full text-center text-6xl"
						variants={headerVariants}
						initial="hidden"
						animate="visible"
					>
						Events
					</motion.h1>
					<motion.p
						className="w-full text-center text-xl"
						variants={headerVariants}
						initial="hidden"
						animate="visible"
					>
						Where Technology Meets Creativity and Collaboration
					</motion.p>
				</div>

				<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{eventsData.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</div>
		</div>
	);
}

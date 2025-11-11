"use client";

import EventCard from "@/components/Events/EventCard";
import { eventsData } from "@/constant/events";
import { motion } from "motion/react";
import { fadeInBlur, staggerContainer } from "@/lib/motionVariants";
import PageContainer from "@/components/UI/PageContainer";
import PageHeader from "@/components/UI/PageHeader";

export default function Page() {
	return (
		<PageContainer>
			<PageHeader
				title="Events"
				subtitle="Where Technology Meets Creativity and Collaboration"
			/>

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
		</PageContainer>
	);
}

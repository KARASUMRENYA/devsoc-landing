"use client";

import EventCard from "@/components/Events/EventCard";
import { eventsData } from "@/constant/events";
import { motion } from "motion/react";
import { fadeInBlur, staggerContainer } from "@/lib/motionVariants";
import PageContainer from "@/components/UI/PageContainer";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	// Sort events in descending order (latest first)
	const sortedEvents = [...eventsData].reverse();
	const latestEvent = sortedEvents[0];
	const previousEvents = sortedEvents.slice(1);
	
	// Check if registration is enabled
	const isRegistrationEnabled = process.env.NEXT_PUBLIC_ENABLE_EVENT_REGISTRATION === "yes" || 
								  process.env.NEXT_PUBLIC_ENABLE_EVENT_REGISTRATION === "true";

	return (
		<PageContainer>
			{/* Latest Event - Expanded View */}
			{latestEvent && (
				<motion.div
					className="mb-16 w-full"
					variants={fadeInBlur}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="mb-8 px-4 md:px-0">
						<h2 className="font-iceland text-5xl font-bold text-white mb-2">
							Latest Event
						</h2>
						<div className="h-1 w-20 bg-accent rounded-full"></div>
					</div>

					<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-6 md:gap-12">
						{/* LEFT SIDE (Content) */}
						<div className="md:col-span-4 px-4 md:px-0">
							<h1 className="font-iceland mb-2 text-4xl sm:text-6xl font-bold text-white">
								{latestEvent.title}
							</h1>
							<p className="mb-6 text-lg text-neutral-300 sm:text-xl">
								{latestEvent.date}
							</p>
							<p className="text-md font-sans leading-relaxed text-neutral-100 sm:text-lg mb-8">
								{latestEvent.description}
							</p>

							{/* Registration Button */}
							{isRegistrationEnabled && (
								<div className="flex flex-col sm:flex-row gap-4">
									<Link
										href={`/events/${latestEvent.slug}/register`}
										className="inline-flex items-center justify-center rounded-3xl bg-accent px-6 py-3 font-medium text-black transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black text-center"
									>
										Register for Event
									</Link>
									<Link
										href={`/events/${latestEvent.slug}`}
										className="inline-flex items-center justify-center rounded-3xl border border-neutral-600 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-black text-center"
									>
										View Details
									</Link>
								</div>
							)}

							{/* If registration is not enabled, just show view details */}
							{!isRegistrationEnabled && (
								<Link
									href={`/events/${latestEvent.slug}`}
									className="inline-flex items-center justify-center rounded-3xl bg-accent px-6 py-3 font-medium text-black transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black text-center"
								>
									View Details
								</Link>
							)}
						</div>

						{/* RIGHT SIDE (Image) */}
						<div className="relative w-full overflow-hidden rounded-3xl bg-neutral-800 md:col-span-2 mx-4 md:mx-0">
							<Image
								src={latestEvent.image}
								alt={latestEvent.title}
								width={600}
								height={800}
								className="h-auto w-full object-contain"
								priority
								sizes="(max-width: 768px) 100vw, 40vw"
							/>
						</div>
					</div>
				</motion.div>
			)}

			{/* Previous Events */}
			{previousEvents.length > 0 && (
				<motion.div
					className="w-full"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="mb-8 px-4 md:px-0">
						<h2 className="font-iceland text-5xl font-bold text-white mb-2">
							Previous Events
						</h2>
						<div className="h-1 w-20 bg-accent rounded-full"></div>
					</div>

					<div className="grid w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4">
						{previousEvents.map((event) => (
							<motion.div key={event.slug} variants={fadeInBlur}>
								<EventCard event={event} />
							</motion.div>
						))}
					</div>
				</motion.div>
			)}
		</PageContainer>
	);
}

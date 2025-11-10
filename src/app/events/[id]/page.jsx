"use client";

import { use } from "react";
import { eventsData } from "@/constant/events";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function EventDetailPage({ params }) {
	const { id } = use(params);
	const event = eventsData.find((e) => e.id === id);
	if (!event) {
		notFound();
	}

	return (
		<div className="relative flex w-full flex-col items-center justify-center bg-black p-4 pt-20 pb-16 text-white sm:p-6 sm:pb-24 md:pt-40">
			<div className="relative w-full max-w-6xl">
				{/*  Floating Back Button placed outside main grid */}
				<motion.div
					className="absolute -top-10 left-0 sm:-top-14"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Link
						href="/events"
						className="flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-neutral-200 transition-colors hover:bg-neutral-700 hover:text-white"
					>
						<ArrowLeft size={18} />
						Back to all events
					</Link>
				</motion.div>

				{/* Main Content Grid */}
				<div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-6 md:gap-12">
					{/* LEFT SIDE (Content) */}
					<motion.div
						className="md:col-span-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h1 className="font-iceland mb-2 text-5xl font-bold sm:text-7xl">
							{event.title}
						</h1>
						<p className="mb-6 text-lg text-neutral-300 sm:text-xl">
							{event.date}
						</p>
						<p className="text-md font-sans leading-relaxed text-neutral-100 sm:text-lg">
							{event.description}
						</p>
					</motion.div>

					{/* RIGHT SIDE (Image) */}
					<motion.div
						className="relative w-full overflow-hidden rounded-3xl bg-neutral-800 md:col-span-2"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Image
							src={event.image}
							alt={event.title}
							width={600}
							height={800}
							className="h-auto w-full object-contain"
							priority
							sizes="(max-width: 768px) 100vw, 40vw"
						/>
					</motion.div>
				</div>

				{/* Event Gallery Section */}
				{event.gallery && event.gallery.length > 0 && (
					<motion.div
						className="w-full pt-12"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h2 className="font-iceland mb-6 text-5xl font-bold">
							Event Snaps
						</h2>
						<div className="columns-2 gap-4 lg:columns-4">
							{event.gallery.map((photoUrl, index) => (
								<div
									key={index}
									className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-3xl bg-neutral-800"
								>
									<Image
										src={photoUrl}
										alt={`Event snapshot ${index + 1}`}
										width={400}
										height={600}
										className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
										sizes="(max-width: 768px) 50vw, 25vw"
									/>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
}

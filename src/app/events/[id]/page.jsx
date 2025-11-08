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
		<div className="relative flex w-full flex-col items-center justify-center bg-black p-4 pt-40 pb-16 text-white sm:p-6 sm:pt-48 sm:pb-24">
			<div className="w-full max-w-6xl relative">
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
				<div className="grid w-full grid-cols-1 md:grid-cols-5 md:gap-12 mt-10 sm:mt-16">
					{/* LEFT SIDE (Content) */}
					<motion.div
						className="md:col-span-3"
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
						className="relative w-full aspect-3/4 overflow-hidden rounded-lg bg-neutral-800 md:col-span-2"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Image
							src={event.image}
							alt={event.title}
							fill
							className="object-cover"
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
						<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
							{event.gallery.map((photoUrl, index) => (
								<div
									key={index}
									className="group relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-800"
								>
									<Image
										src={photoUrl}
										alt={`Event snapshot ${index + 1}`}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										sizes="(max-width: 768px) 50vw, 33vw"
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

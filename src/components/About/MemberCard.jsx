"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeInBlur } from "@/lib/motionVariants";

export default function MemberCard({ member, index }) {
	return (
		<motion.div
			variants={fadeInBlur}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay: index * 0.05 }}
		>
			<Link href={member.link} className="group block">
				<div className="relative overflow-hidden rounded-2xl bg-neutral-800/90 p-4 transition-all duration-300 hover:scale-101 hover:bg-neutral-700/80">
					<div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-neutral-900">
						<Image
							src={member.image}
							alt={member.name}
							fill
							className="object-contain"
						/>
					</div>
					<div className="text-center">
						<h3 className="font-semibold text-white">{member.name}</h3>
						<p className="text-sm text-orange-300">{member.designation}</p>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}

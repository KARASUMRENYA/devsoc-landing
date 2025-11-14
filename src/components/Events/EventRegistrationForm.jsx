"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { fadeInBlur } from "@/lib/motionVariants";

export default function EventRegistrationForm({ event }) {
	const [formData, setFormData] = useState({
		name: "",
		roll: "",
		phone: "",
		email: "",
		department: "",
		year: "",
		questions: "",
		transactionId: "",
		paymentScreenshot: null,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormData((prev) => ({
			...prev,
			paymentScreenshot: file,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// TODO: Implement form submission logic
		console.log("Form submitted:", formData);
		
		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			alert("Registration submitted successfully!");
		}, 2000);
	};

	return (
		<motion.div
			variants={fadeInBlur}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="mx-auto max-w-2xl rounded-3xl bg-neutral-900/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-neutral-800"
		>
			<div className="mb-6 sm:mb-8 text-center">
				<h2 className="mb-2 text-2xl sm:text-3xl font-bold text-white">
					Event Registration
				</h2>
				<p className="text-sm sm:text-base text-neutral-400">
					Register for {event.title} - {event.date}
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						What's your name <span className="text-red-400">*</span>
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
						placeholder="Enter your full name"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						Enter your Roll <span className="text-red-400">*</span>
					</label>
					<input
						type="text"
						name="roll"
						value={formData.roll}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
						placeholder="Enter your roll number"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						Enter your Phone No. <span className="text-red-400">*</span>
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
						placeholder="Enter your phone number"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						Enter your Email ID <span className="text-red-400">*</span>
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
						placeholder="Enter your email address"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						What is your Dept? <span className="text-red-400">*</span>
					</label>
					<select
						name="department"
						value={formData.department}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
					>
						<option value="">Select your department</option>
						<option value="CSE">Computer Science Engineering</option>
						<option value="ECE">Electronics & Communication Engineering</option>
						<option value="EEE">Electrical & Electronics Engineering</option>
						<option value="ME">Mechanical Engineering</option>
						<option value="CE">Civil Engineering</option>
						<option value="IT">Information Technology</option>
						<option value="Other">Other</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						What is your Year? <span className="text-red-400">*</span>
					</label>
					<select
						name="year"
						value={formData.year}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
					>
						<option value="">Select your year</option>
						<option value="1st Year">1st Year</option>
						<option value="2nd Year">2nd Year</option>
						<option value="3rd Year">3rd Year</option>
						<option value="4th Year">4th Year</option>
					</select>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						Do you have any questions? <span className="text-red-400">*</span>
					</label>
					<textarea
						name="questions"
						value={formData.questions}
						onChange={handleInputChange}
						required
						rows={4}
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
						placeholder="Please share any questions or special requirements"
					/>
				</div>

				<div className="text-center">
					<p className="mb-4 text-sm sm:text-base text-white">
						Scan to pay / Rs. 50 / person
					</p>
					<div className="mx-auto mb-4 w-fit rounded-lg bg-white p-3 sm:p-4">
						<Image
							src="/DevsocHero.png"
							alt="Payment QR Code"
							width={180}
							height={180}
							className="mx-auto w-32 h-32 sm:w-44 sm:h-44 object-contain"
						/>
					</div>
					<p className="text-xs sm:text-sm text-neutral-400">
						UPI ID: opsubham609@oksbi
					</p>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						Enter Transaction ID <span className="text-red-400">*</span>
					</label>
					<input
						type="text"
						name="transactionId"
						value={formData.transactionId}
						onChange={handleInputChange}
						required
						className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
						placeholder="Enter your transaction ID"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-white">
						Enter the Payment Screenshot <span className="text-red-400">*</span>
					</label>
					<div className="relative">
						<input
							type="file"
							name="paymentScreenshot"
							onChange={handleFileChange}
							accept="image/*"
							required
							className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent"
						/>
					</div>
					<p className="mt-1 text-xs text-neutral-400">
						Size limit: 5 MB
					</p>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full rounded-lg bg-accent px-6 py-3 font-medium text-black transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</form>
		</motion.div>
	);
}
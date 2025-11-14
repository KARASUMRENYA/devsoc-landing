"use client";

import NewsletterCard from "@/components/Newsletter/NewsletterCard";
import { newsletterItems } from "@/constant/newsletter";
import PageContainer from "@/components/UI/PageContainer";
import PageHeader from "@/components/UI/PageHeader";

export default function Page() {
	// Sort newsletters by date in descending order (latest first)
	const sortedNewsletters = [...newsletterItems].sort((a, b) => {
		return b.date.localeCompare(a.date);
	});

	// Format date from YYYY-MM to "Month Year"
	const formatDate = (dateStr) => {
		const [year, month] = dateStr.split("-");
		const date = new Date(year, month - 1);
		return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
	};

	return (
		<PageContainer>
			<PageHeader
				title="Newsletter"
				subtitle="Stay updated with the latest innovations and insights from our tech community"
			/>
			<div className="flex flex-col gap-8">
				{sortedNewsletters.map((item, index) => (
					<NewsletterCard
						key={index}
						item={{ ...item, date: formatDate(item.date) }}
						index={index}
					/>
				))}
			</div>
		</PageContainer>
	);
}

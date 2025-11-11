"use client";

import NewsletterCard from "@/components/Newsletter/NewsletterCard";
import { newsletterItems } from "@/constant/newsletter";
import PageContainer from "@/components/UI/PageContainer";
import PageHeader from "@/components/UI/PageHeader";

export default function Page() {
	return (
		<PageContainer>
			<PageHeader
				title="Newsletter"
				subtitle="Stay updated with the latest innovations and insights from our tech community"
			/>
			<div className="flex flex-col gap-8">
				{newsletterItems.map((item, index) => (
					<NewsletterCard key={index} item={item} index={index} />
				))}
			</div>
		</PageContainer>
	);
}

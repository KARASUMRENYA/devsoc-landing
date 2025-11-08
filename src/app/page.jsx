import Events from "@/components/Home/Events";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Gallery from "@/components/Home/Gallery";

export default function Home() {
	return (
		<div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center bg-neutral-50">
			<Hero />
			<Newsletter />
			<Events />
			<Gallery />
		</div>
	);
}

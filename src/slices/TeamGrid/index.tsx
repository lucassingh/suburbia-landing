import React, { JSX } from "react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Content, createClient } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Skater } from './Skater';
import { SlideIn } from "@/components/SlideIn";

export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

const TeamGrid = async ({ slice }: TeamGridProps): Promise<JSX.Element> => {

	const client = createClient('06-suburbia-landing')

	const skaters = await client.getAllByType('skater')

	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-texture bg-brand-navy"
		>
			<SlideIn>
				<Heading as="h2" size="lg" className="mb-8 text-center text-white" >
					<PrismicRichText field={slice.primary.heading} />
				</Heading>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{
						skaters.map((skater, index) => (
							<React.Fragment key={index}>
								{
									skater.data.first_name && (
										<Skater index={index} skater={skater} />
									)
								}
							</React.Fragment>
						))
					}

				</div>
			</SlideIn>
		</Bounded>
	);
};

export default TeamGrid;

import { JSX } from "react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import SkateBoardProduct from "./SkateBoardProduct";
import { SlideIn } from "@/components/SlideIn";

export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {

    return (
        <Bounded
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="bg-texture bg-brand-gray"
        >
            <SlideIn>
                <Heading className="text-center -mb-4/6" as="h2" >
                    <PrismicRichText field={slice.primary.heading} />
                </Heading>

                <div className="text-center -mb-6/10">
                    <PrismicRichText field={slice.primary.body} />
                </div>

                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
                    {
                        slice.primary.product.map(({ skateboard }) => (
                            isFilled.contentRelationship(skateboard) && (
                                <SkateBoardProduct key={skateboard.id} id={skateboard.id} />
                            )
                        ))
                    }
                </div>
            </SlideIn>
        </Bounded>
    );
};

export default ProductGrid;

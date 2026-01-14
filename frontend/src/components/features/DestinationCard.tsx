import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
    name: string;
    description: string;
    image: string;
    location: string;
    slug: string;
    className?: string;
}

const DestinationCard = ({
    name,
    description,
    image,
    location,
    slug,
    className,
}: DestinationCardProps) => {
    return (
        <div className={cn("group relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300", className)}>
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
                    <MapPin size={12} className="text-saffron" />
                    {location}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 relative md:-mt-12 md:mx-4 md:bg-white md:rounded-lg md:shadow-md md:mb-4 transition-transform md:group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-saffron transition-colors">
                    {name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gold font-medium flex items-center gap-1">
                        <Calendar size={12} /> Best time: Oct-Mar
                    </span>
                    <Link href={`/destinations/${slug}`} className="text-saffron text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Explore <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;

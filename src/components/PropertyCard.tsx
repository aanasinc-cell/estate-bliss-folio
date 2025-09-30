import { Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  city: string;
  postcode: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
}

const PropertyCard = ({
  image,
  price,
  address,
  city,
  postcode,
  beds,
  baths,
  sqft,
  description,
}: PropertyCardProps) => {
  return (
    <article className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-smooth overflow-hidden group">
      {/* Property Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={`Property at ${address}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading="lazy"
        />
      </div>

      {/* Property Details */}
      <div className="p-5">
        {/* Price */}
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          {price}
        </h3>

        {/* Address */}
        <p className="text-sm text-muted-foreground mb-1">{address}</p>
        <p className="text-sm text-muted-foreground mb-4">
          {city} · {postcode}
        </p>

        {/* Features */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{sqft.toLocaleString()} sq ft</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
};

export default PropertyCard;

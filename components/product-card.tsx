import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function ProductCard({ title, description, imageSrc }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg rounded-2xl transition-all hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}


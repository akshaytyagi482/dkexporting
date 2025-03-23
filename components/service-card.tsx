import { Card, CardContent } from "@/components/ui/card"
import { Globe, Tag, Search, Truck } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe size={32} className="text-green-600 dark:text-green-400" />
      case "tag":
        return <Tag size={32} className="text-green-600 dark:text-green-400" />
      case "search":
        return <Search size={32} className="text-green-600 dark:text-green-400" />
      case "truck":
        return <Truck size={32} className="text-green-600 dark:text-green-400" />
      default:
        return <Globe size={32} className="text-green-600 dark:text-green-400" />
    }
  }

  return (
    <Card className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-all">
      <CardContent className="p-8">
        <div className="bg-green-100 dark:bg-green-800 p-4 rounded-xl inline-block mb-4">{getIcon(icon)}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}


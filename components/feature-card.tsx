import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Settings, Leaf } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award size={28} className="text-green-600 dark:text-green-400" />
      case "globe":
        return <Globe size={28} className="text-green-600 dark:text-green-400" />
      case "settings":
        return <Settings size={28} className="text-green-600 dark:text-green-400" />
      case "leaf":
        return <Leaf size={28} className="text-green-600 dark:text-green-400" />
      default:
        return <Award size={28} className="text-green-600 dark:text-green-400" />
    }
  }

  return (
    <Card className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-all">
      <CardContent className="p-6 text-center">
        <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full inline-flex justify-center items-center mb-4 w-14 h-14">
          {getIcon(icon)}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}


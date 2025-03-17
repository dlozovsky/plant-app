import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Droplet, Sun, Wind, Thermometer, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CareGuidePage() {
  // Sample plant categories
  const categories = [
    { id: "indoor", name: "Indoor Plants" },
    { id: "outdoor", name: "Outdoor Plants" },
    { id: "succulents", name: "Succulents & Cacti" },
    { id: "flowering", name: "Flowering Plants" },
    { id: "herbs", name: "Herbs & Vegetables" },
  ]

  // Sample plants for indoor category
  const indoorPlants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      commonName: "Swiss Cheese Plant",
      image: "/placeholder.svg?height=200&width=200",
      care: {
        water: "Allow soil to dry between waterings",
        light: "Bright, indirect light",
        humidity: "Medium to high",
        temperature: "65-85°F (18-29°C)",
      },
    },
    {
      id: 2,
      name: "Ficus Lyrata",
      commonName: "Fiddle Leaf Fig",
      image: "/placeholder.svg?height=200&width=200",
      care: {
        water: "Water when top inch of soil is dry",
        light: "Bright, indirect light",
        humidity: "Medium",
        temperature: "60-75°F (15-24°C)",
      },
    },
    {
      id: 3,
      name: "Sansevieria Trifasciata",
      commonName: "Snake Plant",
      image: "/placeholder.svg?height=200&width=200",
      care: {
        water: "Allow soil to dry completely between waterings",
        light: "Low to bright, indirect light",
        humidity: "Low to medium",
        temperature: "70-90°F (21-32°C)",
      },
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <h1 className="font-semibold text-lg text-green-800">Plant Care Guides</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search care guides..." className="pl-10 bg-white border-green-100" />
          </div>

          <Tabs defaultValue="indoor">
            <TabsList className="bg-green-50 mb-6">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-white">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="indoor" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {indoorPlants.map((plant) => (
                  <Card key={plant.id} className="overflow-hidden border-green-100">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={plant.image || "/placeholder.svg"}
                        alt={plant.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-green-800">{plant.name}</h3>
                      <p className="text-xs text-gray-500 italic mb-3">{plant.commonName}</p>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 mr-2">
                            <Droplet className="h-3 w-3 text-blue-600" />
                          </div>
                          <p className="text-xs text-gray-700">{plant.care.water}</p>
                        </div>

                        <div className="flex items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 mr-2">
                            <Sun className="h-3 w-3 text-yellow-600" />
                          </div>
                          <p className="text-xs text-gray-700">{plant.care.light}</p>
                        </div>

                        <div className="flex items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mr-2">
                            <Wind className="h-3 w-3 text-green-600" />
                          </div>
                          <p className="text-xs text-gray-700">{plant.care.humidity}</p>
                        </div>

                        <div className="flex items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 mr-2">
                            <Thermometer className="h-3 w-3 text-red-600" />
                          </div>
                          <p className="text-xs text-gray-700">{plant.care.temperature}</p>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4 border-green-200 text-green-700"
                        asChild
                      >
                        <Link href={`/care-guide/${plant.id}`}>View Detailed Guide</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have similar content */}
            {categories
              .filter((c) => c.id !== "indoor")
              .map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="text-center py-12">
                    <Leaf className="mx-auto h-12 w-12 text-green-300" />
                    <p className="mt-4 text-green-800">Coming Soon</p>
                    <p className="mt-2 text-sm text-green-600">
                      We're working on adding {category.name.toLowerCase()} care guides
                    </p>
                  </div>
                </TabsContent>
              ))}
          </Tabs>
        </div>
      </div>
    </main>
  )
}


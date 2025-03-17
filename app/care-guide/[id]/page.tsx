import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Droplet, Sun, Wind, Thermometer, AlertTriangle, Check, Bookmark } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlantCareGuidePage({ params }: { params: { id: string } }) {
  // This would come from a database in a real app
  const plant = {
    id: params.id,
    name: "Monstera Deliciosa",
    commonName: "Swiss Cheese Plant",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "The Monstera deliciosa is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.",
    care: {
      water: {
        frequency: "Every 1-2 weeks",
        details:
          "Allow soil to dry out between waterings. Water thoroughly when the top 2-3 inches of soil feels dry. Reduce watering in winter. Overwatering can lead to root rot, while underwatering causes leaf curling and brown edges.",
      },
      light: {
        level: "Bright, indirect light",
        details:
          "Thrives in bright, indirect light. Can tolerate some direct morning sun but avoid harsh afternoon sun which can scorch the leaves. In low light, growth will slow and the plant may develop smaller leaves with less fenestration.",
      },
      humidity: {
        level: "Medium to high",
        details:
          "Prefers higher humidity levels of 60% or more. Regular misting or placing on a pebble tray with water can help increase humidity. Brown leaf edges may indicate the air is too dry.",
      },
      temperature: {
        range: "65-85°F (18-29°C)",
        details:
          "Prefers warm temperatures between 65-85°F (18-29°C). Protect from cold drafts and sudden temperature changes. Temperatures below 55°F (13°C) can damage the plant.",
      },
      soil: {
        type: "Well-draining, rich potting mix",
        details:
          "Use a well-draining, rich potting mix. A mixture of peat moss, perlite, and pine bark works well. The soil should retain some moisture but not stay soggy.",
      },
      fertilizer: {
        schedule: "Monthly during growing season",
        details:
          "Feed with a balanced liquid fertilizer diluted to half strength once a month during spring and summer. Reduce or eliminate fertilizing in fall and winter when growth slows.",
      },
    },
    commonIssues: [
      {
        name: "Yellow Leaves",
        cause:
          "Usually caused by overwatering, but can also be due to nutrient deficiencies or normal aging of lower leaves.",
        solution: "Adjust watering schedule, ensure proper drainage, and check for nutrient deficiencies.",
      },
      {
        name: "Brown Leaf Edges",
        cause: "Low humidity, underwatering, or excess fertilizer.",
        solution: "Increase humidity, adjust watering schedule, and flush soil if overfertilized.",
      },
      {
        name: "Lack of Leaf Fenestration",
        cause: "Young plants or insufficient light.",
        solution: "Be patient with young plants and ensure adequate bright, indirect light.",
      },
      {
        name: "Pests (Spider Mites, Mealybugs)",
        cause: "Common houseplant pests that can infest Monstera plants.",
        solution: "Treat with insecticidal soap or neem oil, isolate affected plants.",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/care-guide">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <h1 className="font-semibold text-lg text-green-800">{plant.name}</h1>
          <Button variant="ghost" size="icon" className="ml-auto text-green-700">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm border border-green-100">
              <img src={plant.image || "/placeholder.svg"} alt={plant.name} className="h-full w-full object-cover" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-green-800">{plant.name}</h2>
              <p className="text-sm text-gray-500 italic">{plant.commonName}</p>

              <p className="mt-4 text-gray-700">{plant.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-blue-50 p-3">
                  <div className="flex items-center">
                    <Droplet className="h-4 w-4 text-blue-600 mr-2" />
                    <p className="text-sm font-medium text-blue-800">Water</p>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">{plant.care.water.frequency}</p>
                </div>

                <div className="rounded-md bg-yellow-50 p-3">
                  <div className="flex items-center">
                    <Sun className="h-4 w-4 text-yellow-600 mr-2" />
                    <p className="text-sm font-medium text-yellow-800">Light</p>
                  </div>
                  <p className="text-sm text-yellow-600 mt-1">{plant.care.light.level}</p>
                </div>

                <div className="rounded-md bg-green-50 p-3">
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 text-green-600 mr-2" />
                    <p className="text-sm font-medium text-green-800">Humidity</p>
                  </div>
                  <p className="text-sm text-green-600 mt-1">{plant.care.humidity.level}</p>
                </div>

                <div className="rounded-md bg-red-50 p-3">
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 text-red-600 mr-2" />
                    <p className="text-sm font-medium text-red-800">Temperature</p>
                  </div>
                  <p className="text-sm text-red-600 mt-1">{plant.care.temperature.range}</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="care" className="mt-8">
            <TabsList className="bg-green-50">
              <TabsTrigger value="care" className="data-[state=active]:bg-white">
                Detailed Care
              </TabsTrigger>
              <TabsTrigger value="issues" className="data-[state=active]:bg-white">
                Common Issues
              </TabsTrigger>
              <TabsTrigger value="treatment" className="data-[state=active]:bg-white">
                Treatment Guide
              </TabsTrigger>
            </TabsList>

            <TabsContent value="care" className="mt-4">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Droplet className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Watering</h3>
                      </div>
                      <p className="text-gray-700">{plant.care.water.details}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Sun className="h-5 w-5 text-yellow-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Light</h3>
                      </div>
                      <p className="text-gray-700">{plant.care.light.details}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Wind className="h-5 w-5 text-green-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Humidity</h3>
                      </div>
                      <p className="text-gray-700">{plant.care.humidity.details}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Thermometer className="h-5 w-5 text-red-600 mr-2" />
                        <h3 className="font-medium text-gray-800">Temperature</h3>
                      </div>
                      <p className="text-gray-700">{plant.care.temperature.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="issues" className="mt-4">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {plant.commonIssues.map((issue, index) => (
                      <div key={index} className="pb-4 border-b border-green-100 last:border-0 last:pb-0">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-amber-800">{issue.name}</h3>
                            <p className="mt-1 text-sm text-gray-700">
                              <span className="font-medium">Cause:</span> {issue.cause}
                            </p>
                            <p className="mt-1 text-sm text-gray-700">
                              <span className="font-medium">Solution:</span> {issue.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="treatment" className="mt-4">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="rounded-md bg-green-50 p-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-green-800">Preventative Care</h3>
                          <p className="mt-1 text-sm text-green-700">
                            Regular inspection of leaves and stems can help catch issues early. Wipe leaves with a damp
                            cloth monthly to remove dust and check for pests.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-medium text-gray-800">Treatment Steps for Common Issues:</h3>

                    <div>
                      <h4 className="font-medium text-amber-800">For Pest Infestations:</h4>
                      <ol className="mt-2 space-y-2 text-sm text-gray-700 list-decimal pl-4">
                        <li>Isolate the affected plant to prevent spread to other plants</li>
                        <li>Gently wash the plant with room temperature water to remove visible pests</li>
                        <li>Apply insecticidal soap or neem oil solution to all plant surfaces</li>
                        <li>Repeat treatment every 7-10 days for at least 3 applications</li>
                        <li>Continue to monitor for signs of pests after treatment</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium text-amber-800">For Overwatering Issues:</h4>
                      <ol className="mt-2 space-y-2 text-sm text-gray-700 list-decimal pl-4">
                        <li>Stop watering immediately and allow soil to dry out completely</li>
                        <li>Check roots for signs of rot (brown, mushy roots)</li>
                        <li>If root rot is present, repot with fresh soil after trimming affected roots</li>
                        <li>Ensure pot has adequate drainage holes</li>
                        <li>Adjust watering schedule to prevent future overwatering</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-medium text-amber-800">For Light-Related Issues:</h4>
                      <ol className="mt-2 space-y-2 text-sm text-gray-700 list-decimal pl-4">
                        <li>Gradually adjust plant position to provide appropriate light levels</li>
                        <li>For sunburned leaves, move plant away from direct sunlight</li>
                        <li>For leggy growth, increase light exposure gradually</li>
                        <li>Consider supplemental grow lights during winter months</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}


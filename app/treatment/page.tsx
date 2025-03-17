import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, AlertTriangle, Leaf, Calendar, ShoppingCart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TreatmentPage() {
  // Sample treatment plan
  const treatmentPlan = {
    plantName: "Monstera Deliciosa",
    issues: [
      {
        name: "Early Signs of Leaf Spot",
        treatments: [
          {
            step: "Remove affected leaves",
            instructions:
              "Using clean, sharp scissors or pruning shears, cut off leaves with brown spots. Disinfect tools before and after use.",
            frequency: "Immediate action",
            supplies: ["Pruning shears", "Rubbing alcohol for disinfection"],
          },
          {
            step: "Improve air circulation",
            instructions:
              "Ensure the plant has adequate space around it. Consider using a small fan on low setting nearby if in a humid, stagnant environment.",
            frequency: "Ongoing",
            supplies: ["Small fan (optional)"],
          },
          {
            step: "Apply fungicide",
            instructions:
              "Apply a copper-based fungicide or neem oil solution to the remaining leaves, following product instructions.",
            frequency: "Every 7-10 days for 3 applications",
            supplies: ["Copper fungicide or neem oil", "Spray bottle"],
          },
        ],
      },
      {
        name: "Slight Nutrient Deficiency",
        treatments: [
          {
            step: "Apply balanced fertilizer",
            instructions: "Use a balanced liquid fertilizer (e.g., 10-10-10) diluted to half the recommended strength.",
            frequency: "Once every 4 weeks during growing season",
            supplies: ["Balanced liquid fertilizer"],
          },
          {
            step: "Monitor new growth",
            instructions: "Watch new leaves for signs of improvement or continued deficiency.",
            frequency: "Ongoing",
            supplies: [],
          },
        ],
      },
    ],
    preventativeCare: [
      {
        step: "Regular inspection",
        instructions: "Check leaves and stems for early signs of problems.",
        frequency: "Weekly",
      },
      {
        step: "Clean leaves",
        instructions: "Wipe leaves with a damp cloth to remove dust and check for pests.",
        frequency: "Monthly",
      },
      {
        step: "Proper watering",
        instructions:
          "Allow soil to dry out between waterings. Water thoroughly when the top 2-3 inches of soil feels dry.",
        frequency: "Every 1-2 weeks, adjust based on conditions",
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/diagnose">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <h1 className="font-semibold text-lg text-green-800">Treatment Plan</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-md">
          <div className="flex items-center mb-6">
            <Leaf className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-xl font-semibold text-green-800">{treatmentPlan.plantName} Treatment</h2>
          </div>

          <Tabs defaultValue="treatment" className="mb-6">
            <TabsList className="bg-green-50">
              <TabsTrigger value="treatment" className="data-[state=active]:bg-white">
                Treatment Steps
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-white">
                Schedule
              </TabsTrigger>
              <TabsTrigger value="supplies" className="data-[state=active]:bg-white">
                Supplies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="treatment" className="mt-4 space-y-6">
              {treatmentPlan.issues.map((issue, issueIndex) => (
                <Card key={issueIndex} className="border-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                      <h3 className="font-medium text-amber-800">{issue.name}</h3>
                    </div>

                    <div className="space-y-4">
                      {issue.treatments.map((treatment, treatmentIndex) => (
                        <div key={treatmentIndex} className="pl-4 border-l-2 border-green-200">
                          <h4 className="font-medium text-green-800">{treatment.step}</h4>
                          <p className="mt-1 text-sm text-gray-700">{treatment.instructions}</p>
                          <div className="mt-2 flex items-center">
                            <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                            <p className="text-xs text-gray-500">{treatment.frequency}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-medium text-green-800">Preventative Care</h3>
                  </div>

                  <div className="space-y-4">
                    {treatmentPlan.preventativeCare.map((care, careIndex) => (
                      <div key={careIndex} className="pl-4 border-l-2 border-green-200">
                        <h4 className="font-medium text-green-800">{care.step}</h4>
                        <p className="mt-1 text-sm text-gray-700">{care.instructions}</p>
                        <div className="mt-2 flex items-center">
                          <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                          <p className="text-xs text-gray-500">{care.frequency}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="mt-4">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-green-800 mb-3">Immediate Actions</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 mr-2 flex-shrink-0">
                            <span className="text-xs font-medium text-amber-800">1</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Remove affected leaves</p>
                            <p className="text-xs text-gray-600">Today</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 mr-2 flex-shrink-0">
                            <span className="text-xs font-medium text-amber-800">2</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Apply fungicide</p>
                            <p className="text-xs text-gray-600">Today</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-green-800 mb-3">This Week</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mr-2 flex-shrink-0">
                            <span className="text-xs font-medium text-green-800">3</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Improve air circulation</p>
                            <p className="text-xs text-gray-600">Within 2 days</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mr-2 flex-shrink-0">
                            <span className="text-xs font-medium text-green-800">4</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Apply balanced fertilizer</p>
                            <p className="text-xs text-gray-600">Within 3 days</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-green-800 mb-3">Next Week</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mr-2 flex-shrink-0">
                            <span className="text-xs font-medium text-green-800">5</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">Second fungicide application</p>
                            <p className="text-xs text-gray-600">7-10 days after first application</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-green-50 px-6 py-3">
                  <Button variant="outline" className="w-full border-green-200 text-green-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Add to Calendar
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="supplies" className="mt-4">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="font-medium text-green-800 mb-4">Recommended Supplies</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Pruning Shears</p>
                        <p className="text-sm text-gray-600">For removing affected leaves</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Copper Fungicide or Neem Oil</p>
                        <p className="text-sm text-gray-600">For treating leaf spot</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Spray Bottle</p>
                        <p className="text-sm text-gray-600">For applying treatments</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Balanced Liquid Fertilizer</p>
                        <p className="text-sm text-gray-600">For addressing nutrient deficiency</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Rubbing Alcohol</p>
                        <p className="text-sm text-gray-600">For disinfecting tools</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-green-50 px-6 py-3">
                  <Button variant="outline" className="w-full border-green-200 text-green-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Shop for Supplies
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-green-200 text-green-700" asChild>
              <Link href="/reminders">Set Reminders</Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}


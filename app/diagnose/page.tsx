"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Leaf, AlertTriangle, Check, RefreshCw, Stethoscope } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DiagnosePage() {
  const [diagnosisStage, setDiagnosisStage] = useState<"analyzing" | "complete">("analyzing")
  const [progress, setProgress] = useState(0)

  // Simulate diagnosis progress
  useState(() => {
    const timer = setTimeout(() => {
      setDiagnosisStage("complete")
    }, 3000)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  // Sample diagnosis results
  const diagnosisResults = {
    plantName: "Monstera Deliciosa",
    commonName: "Swiss Cheese Plant",
    healthStatus: "Minor Issues",
    issues: [
      {
        name: "Early Signs of Leaf Spot",
        severity: "mild",
        description: "Small brown spots on some leaves may indicate a fungal infection starting to develop.",
        treatment: "Remove affected leaves, improve air circulation, and avoid getting water on leaves when watering.",
      },
      {
        name: "Slight Nutrient Deficiency",
        severity: "mild",
        description: "Yellowing on older leaves suggests a possible nitrogen deficiency.",
        treatment:
          "Apply a balanced fertilizer diluted to half strength. Consider a fertilizer with higher nitrogen content.",
      },
    ],
    positives: ["Overall plant structure is healthy", "New growth appears normal", "No signs of pest infestation"],
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/camera">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <h1 className="font-semibold text-lg text-green-800">Plant Diagnosis</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm border border-green-100 mb-6">
            <img src="/placeholder.svg?height=400&width=400" alt="Plant image" className="h-full w-full object-cover" />
          </div>

          {diagnosisStage === "analyzing" ? (
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Stethoscope className="h-8 w-8 text-green-600 mr-2 animate-pulse" />
                  <h2 className="text-xl font-semibold text-green-800">Analyzing Plant Health</h2>
                </div>

                <Progress value={progress} className="h-2 mb-2" />

                <p className="text-center text-sm text-gray-600">
                  Our AI is examining your plant for signs of disease, nutrient deficiencies, and other health issues...
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <p className="text-sm text-gray-700">Identifying plant species</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <p className="text-sm text-gray-700">Analyzing leaf structure</p>
                  </div>
                  <div className="flex items-center">
                    <RefreshCw className="h-4 w-4 text-amber-600 mr-2 animate-spin" />
                    <p className="text-sm text-gray-700">Checking for disease patterns</p>
                  </div>
                  <div className="flex items-center opacity-50">
                    <div className="h-4 w-4 mr-2" />
                    <p className="text-sm text-gray-700">Evaluating overall health</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600 mr-2" />
                    <div>
                      <h2 className="text-xl font-semibold text-green-800">{diagnosisResults.plantName}</h2>
                      <p className="text-sm text-gray-500 italic">{diagnosisResults.commonName}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-3 rounded-md bg-amber-50 mb-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    <p className="font-medium text-amber-800">Health Status: {diagnosisResults.healthStatus}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800">Detected Issues:</h3>

                    {diagnosisResults.issues.map((issue, index) => (
                      <div key={index} className="rounded-md bg-amber-50 p-4">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-amber-800">{issue.name}</h4>
                            <p className="mt-1 text-sm text-amber-700">{issue.description}</p>
                            <div className="mt-2 p-2 bg-white rounded border border-amber-200">
                              <p className="text-sm font-medium text-gray-700">Treatment:</p>
                              <p className="text-sm text-gray-600">{issue.treatment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <h3 className="font-medium text-gray-800">Positive Signs:</h3>
                    <div className="rounded-md bg-green-50 p-4">
                      <div className="space-y-2">
                        {diagnosisResults.positives.map((positive, index) => (
                          <div key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <p className="text-sm text-green-700">{positive}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-green-200 text-green-700" asChild>
                  <Link href={`/care-guide/1`}>View Care Guide</Link>
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/treatment">Treatment Plan</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}


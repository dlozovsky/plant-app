"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Leaf, Droplet, Sun, Wind, AlertTriangle, Check } from "lucide-react"

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("identification")

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/camera">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <h1 className="font-semibold text-lg text-green-800">Plant Results</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm border border-green-100">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Monstera plant"
              className="h-full w-full object-cover"
            />
          </div>

          <Tabs defaultValue="identification" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-green-50">
              <TabsTrigger value="identification" className="data-[state=active]:bg-white">
                Identification
              </TabsTrigger>
              <TabsTrigger value="health" className="data-[state=active]:bg-white">
                Health
              </TabsTrigger>
              <TabsTrigger value="care" className="data-[state=active]:bg-white">
                Care Tips
              </TabsTrigger>
            </TabsList>

            <TabsContent value="identification" className="mt-4">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-green-100">
                <div className="flex items-center">
                  <Leaf className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-semibold text-green-800">Monstera Deliciosa</h2>
                </div>
                <p className="mt-1 text-sm text-gray-500 italic">Swiss Cheese Plant</p>

                <div className="mt-4">
                  <p className="text-gray-700">
                    The Monstera deliciosa is a species of flowering plant native to tropical forests of southern
                    Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly
                    invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-md bg-green-50 p-3">
                      <p className="text-sm font-medium text-green-800">Family</p>
                      <p className="text-sm text-green-600">Araceae</p>
                    </div>
                    <div className="rounded-md bg-green-50 p-3">
                      <p className="text-sm font-medium text-green-800">Native Region</p>
                      <p className="text-sm text-green-600">Central America</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="health" className="mt-4">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-green-100">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h2 className="text-xl font-semibold text-amber-700">Minor Issues Detected</h2>
                </div>

                <div className="mt-4 space-y-4">
                  <div className="rounded-md bg-amber-50 p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-amber-800">Early Signs of Leaf Spot</h3>
                        <p className="mt-1 text-sm text-amber-700">
                          Small brown spots on some leaves may indicate a fungal infection starting to develop.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-green-800">Overall Health: Good</h3>
                        <p className="mt-1 text-sm text-green-700">
                          The plant appears to be in good health overall with vibrant foliage and good structure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-medium text-green-800">Recommended Actions:</h3>
                    <ul className="mt-2 space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        Remove affected leaves to prevent spread
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        Improve air circulation around the plant
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-green-500">•</span>
                        Avoid getting water on leaves when watering
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-4">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-green-100">
                <h2 className="text-xl font-semibold text-green-800">Care Instructions</h2>

                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 mr-3 flex-shrink-0">
                      <Droplet className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Watering</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Allow soil to dry out between waterings. Water thoroughly when the top 2-3 inches of soil feels
                        dry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 mr-3 flex-shrink-0">
                      <Sun className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Light</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Bright, indirect light. Can tolerate some direct morning sun but avoid harsh afternoon sun.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 mr-3 flex-shrink-0">
                      <Wind className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Humidity</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Prefers higher humidity. Mist occasionally or place on a pebble tray with water.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
              <Link href="/">Identify Another Plant</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}


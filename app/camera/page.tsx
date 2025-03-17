"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera, Image, RefreshCw, Stethoscope } from "lucide-react"

export default function CameraPage() {
  const router = useRouter()
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCapture = () => {
    // In a real app, this would access the camera
    // For this demo, we'll use the file input
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCapturedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis delay
    setTimeout(() => {
      router.push("/results")
    }, 2000)
  }

  const handleRetake = () => {
    setCapturedImage(null)
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-green-700" />
            </Button>
          </Link>
          <h1 className="font-semibold text-lg text-green-800">Take a Photo</h1>
        </div>
      </header>

      <div className="container flex-1 py-8">
        <div className="mx-auto max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5 border-2 border-dashed border-green-200 flex items-center justify-center">
            {capturedImage ? (
              <img
                src={capturedImage || "/placeholder.svg"}
                alt="Captured plant"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-center p-6">
                <Camera className="mx-auto h-12 w-12 text-green-300" />
                <p className="mt-4 text-green-600">Position the plant in frame</p>
                <p className="mt-2 text-sm text-green-500">Make sure the plant is well-lit and clearly visible</p>
              </div>
            )}
          </div>

          <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />

          <div className="mt-6 flex justify-center gap-4">
            {capturedImage ? (
              <>
                <Button variant="outline" size="lg" className="border-green-200 text-green-700" onClick={handleRetake}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Identify Plant"
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-amber-600"
                  onClick={() => router.push("/diagnose")}
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Auto Diagnose
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-700"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Image className="mr-2 h-4 w-4" />
                  Gallery
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleCapture}>
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}


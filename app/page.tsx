import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Leaf, Info, BookOpen, Clock, FileText, MessageSquare } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8faf5]">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-green-100">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-semibold text-xl text-green-800">PlantDr</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-green-700" asChild>
              <Link href="/help">
                <Info className="h-4 w-4 mr-2" />
                Help
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container flex-1 py-8 md:py-12">
        <div className="mx-auto max-w-md text-center">
          <Leaf className="mx-auto h-12 w-12 text-green-600" />
          <h1 className="mt-4 text-3xl font-bold text-green-900">PlantDr</h1>
          <p className="mt-2 text-gray-600">Identify plants and diagnose diseases with just a photo</p>

          <div className="mt-8 grid gap-4">
            <Link href="/camera">
              <Button className="w-full h-14 bg-green-600 hover:bg-green-700">
                <Camera className="mr-2 h-5 w-5" />
                Take a Photo
              </Button>
            </Link>
            <Link href="/library">
              <Button variant="outline" className="w-full h-14 border-green-200 text-green-700 hover:bg-green-50">
                <BookOpen className="mr-2 h-5 w-5" />
                Plant Library
              </Button>
            </Link>
            <Link href="/reminders">
              <Button variant="outline" className="w-full h-14 border-green-200 text-green-700 hover:bg-green-50">
                <Clock className="mr-2 h-5 w-5" />
                Water Reminders
              </Button>
            </Link>
            <Link href="/care-guide">
              <Button variant="outline" className="w-full h-14 border-green-200 text-green-700 hover:bg-green-50">
                <FileText className="mr-2 h-5 w-5" />
                Care Guides
              </Button>
            </Link>
            <Link href="/botanist">
              <Button variant="outline" className="w-full h-14 border-green-200 text-green-700 hover:bg-green-50">
                <MessageSquare className="mr-2 h-5 w-5" />
                AI Botanist Chat
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-green-800">How it works</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm border border-green-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 mx-auto">
                  <Camera className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="mt-2 font-medium text-green-800">Take a photo</h3>
                <p className="mt-1 text-sm text-gray-500">Capture a clear image of the plant</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm border border-green-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 mx-auto">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="mt-2 font-medium text-green-800">Identify</h3>
                <p className="mt-1 text-sm text-gray-500">Our AI identifies the plant species</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm border border-green-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 mx-auto">
                  <Info className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="mt-2 font-medium text-green-800">Diagnose</h3>
                <p className="mt-1 text-sm text-gray-500">Get health status and care tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


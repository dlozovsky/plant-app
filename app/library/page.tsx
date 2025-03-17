import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function LibraryPage() {
  // Sample plant data
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      commonName: "Swiss Cheese Plant",
      image: "/placeholder.svg?height=200&width=200",
    },
    { id: 2, name: "Ficus Lyrata", commonName: "Fiddle Leaf Fig", image: "/placeholder.svg?height=200&width=200" },
    {
      id: 3,
      name: "Sansevieria Trifasciata",
      commonName: "Snake Plant",
      image: "/placeholder.svg?height=200&width=200",
    },
    { id: 4, name: "Zamioculcas Zamiifolia", commonName: "ZZ Plant", image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Epipremnum Aureum", commonName: "Pothos", image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Calathea Orbifolia", commonName: "Prayer Plant", image: "/placeholder.svg?height=200&width=200" },
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
          <h1 className="font-semibold text-lg text-green-800">Plant Library</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search plants..." className="pl-10 bg-white border-green-100" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {plants.map((plant) => (
            <Link
              key={plant.id}
              href={`/results`}
              className="group overflow-hidden rounded-lg bg-white shadow-sm border border-green-100 transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={plant.image || "/placeholder.svg"}
                  alt={plant.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-green-800 line-clamp-1">{plant.name}</h3>
                <p className="text-xs text-gray-500 italic">{plant.commonName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}


"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Plus, Trash2, Droplet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface Reminder {
  id: string
  plantName: string
  frequency: string
  nextWatering: Date
  enabled: boolean
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      plantName: "Monstera Deliciosa",
      frequency: "7",
      nextWatering: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      enabled: true,
    },
    {
      id: "2",
      plantName: "Fiddle Leaf Fig",
      frequency: "10",
      nextWatering: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      enabled: true,
    },
  ])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newPlantName, setNewPlantName] = useState("")
  const [newFrequency, setNewFrequency] = useState("7")

  const addReminder = () => {
    if (!newPlantName) return

    const newReminder: Reminder = {
      id: Date.now().toString(),
      plantName: newPlantName,
      frequency: newFrequency,
      nextWatering: new Date(Date.now() + Number.parseInt(newFrequency) * 24 * 60 * 60 * 1000),
      enabled: true,
    }

    setReminders([...reminders, newReminder])
    setNewPlantName("")
    setNewFrequency("7")
    setShowAddForm(false)
  }

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder)),
    )
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
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
          <h1 className="font-semibold text-lg text-green-800">Water Reminders</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-md">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-green-800">Your Reminders</h2>
            <Button
              variant="outline"
              size="sm"
              className="border-green-200 text-green-700"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? (
                "Cancel"
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-1" /> Add
                </>
              )}
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-6 border-green-100">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="plant-name">Plant Name</Label>
                    <Input
                      id="plant-name"
                      placeholder="Enter plant name"
                      value={newPlantName}
                      onChange={(e) => setNewPlantName(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="frequency">Water Frequency (days)</Label>
                    <Select value={newFrequency} onValueChange={setNewFrequency}>
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">Every 3 days</SelectItem>
                        <SelectItem value="5">Every 5 days</SelectItem>
                        <SelectItem value="7">Every 7 days</SelectItem>
                        <SelectItem value="10">Every 10 days</SelectItem>
                        <SelectItem value="14">Every 14 days</SelectItem>
                        <SelectItem value="30">Every 30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={addReminder}>
                    Add Reminder
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {reminders.length === 0 ? (
            <div className="text-center py-12">
              <Droplet className="mx-auto h-12 w-12 text-green-300" />
              <p className="mt-4 text-green-800">No reminders yet</p>
              <p className="mt-2 text-sm text-green-600">Add your first plant watering reminder</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reminders.map((reminder) => (
                <Card key={reminder.id} className="border-green-100">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-green-800">{reminder.plantName}</h3>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3.5 w-3.5 text-green-600 mr-1" />
                          <p className="text-sm text-green-600">Every {reminder.frequency} days</p>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Droplet className="h-3.5 w-3.5 text-blue-500 mr-1" />
                          <p className="text-sm text-gray-600">Next: {formatDate(reminder.nextWatering)}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Switch checked={reminder.enabled} onCheckedChange={() => toggleReminder(reminder.id)} />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => deleteReminder(reminder.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}


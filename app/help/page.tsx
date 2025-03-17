import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, Search, MessageCircle, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      faqs: [
        {
          question: "What is PlantDr?",
          answer:
            "PlantDr is a mobile app that helps you identify plants, diagnose plant diseases, and provide care instructions using AI technology. Simply take a photo of your plant, and our app will analyze it to give you the information you need.",
        },
        {
          question: "Is PlantDr free to use?",
          answer:
            "PlantDr offers both free and premium features. Basic plant identification and care guides are available for free. Premium features include unlimited plant diagnoses, detailed treatment plans, and water reminder notifications.",
        },
        {
          question: "How accurate is the plant identification?",
          answer:
            "Our plant identification system has been trained on millions of plant images and can identify thousands of plant species with high accuracy. However, factors like image quality, lighting, and the plant's condition can affect results.",
        },
      ],
    },
    {
      id: "features",
      title: "App Features",
      faqs: [
        {
          question: "How does the plant diagnosis work?",
          answer:
            "Our AI analyzes your plant photos to detect signs of common diseases, pest infestations, and nutrient deficiencies. It compares visual patterns against a database of plant health issues to provide accurate diagnoses and treatment recommendations.",
        },
        {
          question: "Can I set reminders for multiple plants?",
          answer:
            "Yes, you can set up watering reminders for as many plants as you want. Each plant can have its own custom watering schedule based on its specific needs.",
        },
        {
          question: "How do I use the treatment plans?",
          answer:
            "After diagnosing a plant issue, the app will generate a step-by-step treatment plan. Follow the instructions provided, which may include removing affected leaves, applying treatments, or adjusting care routines. You can also set reminders for treatment steps.",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      faqs: [
        {
          question: "The app can't identify my plant. What should I do?",
          answer:
            "Try taking another photo with better lighting and a clearer view of the plant's leaves and structure. Make sure the plant is in focus and fills most of the frame. If problems persist, you can submit the image for manual review by our plant experts.",
        },
        {
          question: "Why am I not receiving reminder notifications?",
          answer:
            "Check that you have notifications enabled for the app in your device settings. Also verify that you have enabled the specific reminder in the app settings and that the reminder is set to 'active'.",
        },
        {
          question: "The diagnosis doesn't seem accurate. What can I do?",
          answer:
            "Try taking multiple photos from different angles, including close-ups of affected areas. Our AI works best with clear, well-lit images. You can also try the manual diagnosis option where you select visible symptoms from a list to get more targeted results.",
        },
      ],
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
          <h1 className="font-semibold text-lg text-green-800">Help & Support</h1>
        </div>
      </header>

      <div className="container py-6">
        <div className="mx-auto max-w-2xl">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search help topics..." className="pl-10 bg-white border-green-100" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card className="border-green-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <HelpCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="font-medium text-green-800 mb-2">Getting Started Guide</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the basics of using PlantDr with our step-by-step guide
                </p>
                <Button variant="outline" size="sm" className="border-green-200 text-green-700">
                  View Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="font-medium text-green-800 mb-2">Contact Support</h2>
                <p className="text-sm text-gray-600 mb-4">Need more help? Our support team is ready to assist you</p>
                <Button variant="outline" size="sm" className="border-green-200 text-green-700">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-xl font-semibold text-green-800 mb-4">Frequently Asked Questions</h2>

          {faqCategories.map((category) => (
            <div key={category.id} className="mb-6">
              <h3 className="font-medium text-green-800 mb-3">{category.title}</h3>
              <Accordion type="single" collapsible className="bg-white rounded-lg border border-green-100">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`}>
                    <AccordionTrigger className="px-4 hover:bg-green-50 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0 text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-8 bg-green-50 rounded-lg p-6 text-center">
            <h3 className="font-medium text-green-800 mb-2">Still need help?</h3>
            <p className="text-sm text-green-700 mb-4">Our plant experts are ready to assist you with any questions</p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Mail className="mr-2 h-4 w-4" />
              Email Support
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}


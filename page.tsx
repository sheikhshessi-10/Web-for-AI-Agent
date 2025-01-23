import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Youtube } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[#3A648C]">TALENT</span>
            <span className="text-gray-900">ERIA</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/product" className="text-gray-700 hover:text-gray-900">
            Product
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-gray-900">
            Resources
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/free-trial">
            <Button 
              variant="secondary"
              className="bg-[#3A648C] text-white hover:bg-[#2A547C]"
            >
              FREE TRIAL
            </Button>
          </Link>
          <Button 
            variant="secondary"
            className="bg-[#CA4E52] text-white hover:bg-[#B93E42]"
          >
            GET DEMO
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Meet your Recruitment AI Agent
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Empower AI to manage the repetitive aspects of recruitment, allowing you to dedicate your valuable time to the essential parts of hiring
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-trial">
                <Button 
                  size="lg"
                  className="bg-[#3A648C] text-white hover:bg-[#2A547C]"
                >
                  FREE TRIAL
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2"
              >
                <Youtube className="mr-2 h-5 w-5" />
                PRODUCT TOUR
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cH1aQoIYNsF5TyoVDLt4ZXr2YvMQXL.png"
              alt="AI Recruitment Platform Interface"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              priority
            />
            <div className="absolute -top-8 -left-8">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cH1aQoIYNsF5TyoVDLt4ZXr2YvMQXL.png"
                  alt="AI Icon"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cH1aQoIYNsF5TyoVDLt4ZXr2YvMQXL.png"
                alt="Analytics Preview"
                width={200}
                height={100}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


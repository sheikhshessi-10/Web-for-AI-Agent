import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Youtube, Play } from 'lucide-react'
import LogoBar from "@/components/logo-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[#3A648C]">Ace Interview</span>
          <span className="text-gray-900">AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/product" className="text-gray-700 hover:text-gray-900">Product</Link>
          
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/free-trial">
            <Button className="bg-[#3A648C] text-white hover:bg-[#2A547C]">
              FREE TRIAL
            </Button>
          </Link>
          <Button className="bg-[#CA4E52] text-white hover:bg-[#B93E42]">
            About US
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24 flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Interview Buddy
            </h1>
            <p className="text-xl text-gray-600">
              Get placement in top companies with our AI, grind and go big
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-trial">
                <Button size="lg" className="bg-[#3A648C] text-white hover:bg-[#2A547C]">
                  FREE TRIAL
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2">
                <Youtube className="mr-2 h-5 w-5" />
                PRODUCT TOUR
              </Button>
            </div>
          </div>

          <div className="relative aspect-video bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="ghost" className="rounded-full p-8">
                <Play className="h-12 w-12 text-[#3A648C]" />
              </Button>
            </div>
            <div className="video-container w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8PCwX2wRJqQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <LogoBar />
    </div>
  )
}


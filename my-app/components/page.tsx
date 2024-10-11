'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Truck, Recycle, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image';

export function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">Redbox Disposal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-gray-600 hover:text-red-600">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-red-600">Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-red-600">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-red-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Redbox Kiosk Removal Services</h2>
          <p className="text-xl mb-8">Efficiently Clearing Your Locations for What&apos;s Next</p>
          <Button className="bg-white text-red-600 hover:bg-gray-100">Get a Quote</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Professional Redbox Kiosk Removal</h3>
              <p className="text-gray-600">
                Offering prompt and reliable removal services tailored for corporate properties.
                Discover why leading businesses trust us with their Redbox machine removal needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Recycle className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Disposal and Recycling</h3>
              <p className="text-gray-600">
                Ensuring your Redbox kiosks are responsibly recycled, contributing to sustainability
                and environmental stewardship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Removal Solutions</h3>
              <p className="text-gray-600">
                From electrical disconnection to transportation, we handle every step of the removal
                process efficiently and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="my-app/public/images/redbox.webp" alt="Description" width={500} height={500} />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About Redbox Disposal</h2>
              <p className="text-gray-600 mb-4">
                At Redbox Disposal, we specialize in delivering professional removal services for
                corporate clients seeking to dispose of their Redbox kiosks efficiently and responsibly.
                With extensive experience and a focus on customer satisfaction, we provide seamless
                solutions that meet your business needs.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to support your business transitions while promoting environmental
                sustainability. By utilizing state-of-the-art equipment and adhering to eco-friendly
                practices, we minimize environmental impact and ensure your equipment is disposed of responsibly.
              </p>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-600">
                Have questions or ready to schedule a removal? Get in touch with us today.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-600 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-600 mr-2" />
                  <span>info@redboxdisposal.co</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-600 mr-2" />
                  <span>123 Disposal Street, Waste City, WC 12345</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-600">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Redbox Disposal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
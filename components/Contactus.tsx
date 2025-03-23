import React from 'react'
import ContactForm from './contact-form'
import { GlobeIcon, Mail, Phone } from 'lucide-react'

const Contactus = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Contact Us</h2>
              <div className="h-1 w-20 bg-green-500 mx-auto mb-12 rounded-full"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full">
                        <Mail className="text-green-600 dark:text-green-300" size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">dkexporting@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full">
                        <Phone className="text-green-600 dark:text-green-300" size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300">+91 91994 78437</p>
                      </div>
                    </div>
                    {/* <div className="flex items-start gap-4">
                      <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full">
                        <GlobeIcon className="text-green-600 dark:text-green-300" size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Website</h4>
                        <p className="text-gray-600 dark:text-gray-300">www.dkexporting.com</p>
                      </div>
                    </div> */}
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
  )
}

export default Contactus
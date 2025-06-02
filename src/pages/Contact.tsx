import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import MapSection from "@/components/MapSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Get in touch with our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactForm />

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-spice-green/10 p-3 rounded-full mr-4">
                      <svg
                        className="h-6 w-6 text-spice-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Phone</h4>
                      <div className="flex flex-row gap-4">
                        <a
                          href="tel:+917572893358"
                          className="text-muted-foreground hover:text-spice-green"
                        >
                          +91 75728 93358
                        </a>
                        <a
                          href="tel:+918780707994"
                          className="text-muted-foreground hover:text-spice-green"
                        >
                          +91 87807 07994
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-spice-green/10 p-3 rounded-full mr-4">
                      <svg
                        className="h-6 w-6 text-spice-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <a
                        href="mailto:mbagro.info@gmail.com"
                        className="text-muted-foreground hover:text-spice-green"
                      >
                        mbagro.info@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-spice-green/10 p-3 rounded-full mr-4">
                      <svg
                        className="h-6 w-6 text-spice-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Address</h4>
                      <a
                        href="https://maps.app.goo.gl/TBr5E5svG2VBL1AQ7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-spice-green"
                      >
                        MB Agro, Ahmedabad-Palanpur Highway, Near Shanidev
                        Temple
                        <br />
                        Unava, Gujarat, India
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;

import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Story", href: "/our-story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" }
    ],
    services: [
      { name: "Our Stock", href: "/stock" },
      { name: "Finance", href: "/finance" },
      { name: "Warranty", href: "/warranty" },
      { name: "Insurance", href: "/insurance" }
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Returns", href: "/returns" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Sitemap", href: "/sitemap" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-primary via-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl border border-primary/20">
                  <span className="text-white font-black text-2xl" style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: '900', letterSpacing: '-0.02em'}}>M</span>
                </div>
                <h5 className="text-white mb-0 font-bold text-xl">Motors Hub</h5>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-base">
                Your trusted partner in finding the perfect vehicle. We offer premium cars with exceptional service, competitive financing, and comprehensive warranties.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-gray-300">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-base">123 Auto Street, Car City, CC 12345</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="text-base hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@motorshub.co.uk" className="text-base hover:text-white transition-colors">
                  info@motorshub.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-base touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-base touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-base touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-8 sm:pt-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Stay Updated</h3>
              <p className="text-gray-300 text-base">Subscribe to our newsletter for the latest deals and updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-96">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-base min-h-12"
              />
              <button className="px-6 py-3.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap font-semibold touch-manipulation min-h-12">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300 text-sm">
              <p>&copy; {currentYear} Motors Hub. All rights reserved.</p>
              <div className="flex gap-4">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Made with Love */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Motors Hub Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
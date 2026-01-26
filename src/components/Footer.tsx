import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1e3a5f] border-t border-[#2d4a6f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Perfect Finish Painters"
                width={320}
                height={80}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-[#94a3b8] text-sm max-w-md mb-4">
              Professional painting services in Mays Landing and South Jersey.
              We believe everyone deserves a space meant solely for them, at an affordable price.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/PerfectFinishPainters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/perfect-finish-painters-mays-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459zm-3.455 5.153a1.073 1.073 0 01-.865 1.312 9.19 9.19 0 01-3.935.027 1.073 1.073 0 01-.6-1.727l3.166-4.032c.62-.79 1.855-.387 1.867.61l.367 3.81zm-9.326 2.283c-.09.57-.573.98-1.148.975a9.188 9.188 0 01-3.456-1.47 1.073 1.073 0 01-.03-1.728l4.153-3.156c.81-.616 1.872.144 1.607 1.15l-1.126 4.229zM3.24 9.473a1.072 1.072 0 01-.748-1.315 9.194 9.194 0 012.078-3.426 1.073 1.073 0 011.615.07l3.063 4.097c.6.8-.098 1.907-1.055 1.674l-4.953-1.1zm8.653-6.478a9.194 9.194 0 013.98.494 1.073 1.073 0 01.677 1.3l-1.47 5.087c-.287.996-1.651 1.052-2.064.085L11.3 5.233c-.168-.394-.1-.846.195-1.16a1.072 1.072 0 01.398-.278z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/#services" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="/#how-it-works" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                How It Works
              </Link>
              <Link href="/#why-us" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                Why Choose Us
              </Link>
              <Link href="/quiz" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                Get Estimate
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-[#94a3b8]">
              <p>Mays Landing, NJ</p>
              <a href="tel:+16093774226" className="hover:text-white transition-colors">
                (609) 377-4226
              </a>
              <div className="mt-2">
                <p className="text-white font-medium">Hours</p>
                <p>Mon - Fri: 9am - 6pm</p>
                <p>Saturday: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2d4a6f] mt-8 pt-8 text-center">
          <p className="text-[#94a3b8] text-sm">
            &copy; {new Date().getFullYear()} Perfect Finish Painters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

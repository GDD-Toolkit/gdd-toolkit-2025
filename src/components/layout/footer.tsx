export default function Footer() {
  return (
    <footer className="mt-16">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-extrabold">Global Development <br />and Design</h3>
            <p className="mt-3 text-white/90 text-sm leading-6">
              FIRE Global Development &amp; Design explores ethical development around the world
              and the tools that improve development programs.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="/ethics-canvas">Ethics Canvas</a></li>
              <li><a className="hover:underline" href="/worthwhile-development">Worthwhile Development</a></li>
              <li><a className="hover:underline" href="/development-ethics">Development Ethics</a></li>
              <li><a className="hover:underline" href="/case-studies">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Helps</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="/assistant">AI Assistant</a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} GDD</span>
          <nav className="flex gap-4">
            <a href="/privacy" className="hover:text-gray-700">Privacy</a>
            <a href="/terms" className="hover:text-gray-700">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
    return (
      <footer className="mt-16">
        <section
          className="text-black"
          style={{ background: "linear-gradient(to bottom, #ffffff, #059669)" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Development Ethics Toolkit</h3>
              <p className="mt-3 text-black/80 text-sm leading-6">
                Practical tools, case studies, and methods to design and evaluate responsible projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-black/90">Tools</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li><a className="hover:text-white" href="/ethics-canvas">Ethics Canvas</a></li>
                <li><a className="hover:text-white" href="/ethics-of-innovation">Ethics of Innovation</a></li>
                <li><a className="hover:text-white" href="/worthwhile-development">Worthwhile Development</a></li>
                <li><a className="hover:text-white" href="/case-studies">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black/90">Resources</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li><a className="hover:text-white" href="/project-planning">Project Planning</a></li>
                <li><a className="hover:text-white" href="/project-evaluation">Project Evaluation</a></li>
                <li><a className="hover:text-white" href="/assistant">AI Assistant</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black/90">Contact</h3>
              <p className="mt-3 text-sm text-black/70">Questions or feedback?</p>
              <a href="mailto:hello@gdd.example" className="mt-2 inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-700">Email Us</a>
            </div>
          </div>
        <div className="text-black/10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-black/60">
            <span>© {new Date().getFullYear()} Development Ethics Toolkit</span>
            <nav className="flex gap-4">
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/terms" className="hover:text-white">Terms</a>
            </nav>
          </div>
        </div>
        </section>
      </footer>
    )
  }
  
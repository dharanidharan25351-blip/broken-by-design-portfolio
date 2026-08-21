import BrokenByDesign from "@/components/ui/broken-by-design";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030407] text-slate-100">
      {/* Hero */}
      <BrokenByDesign
        title="broken by design."
        height="100dvh"
        sound={true}
        interactive={true}
        className="relative z-10"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce">
        <ArrowDown className="w-5 h-5 text-slate-400/60" />
      </div>

      {/* About */}
      <section
        id="about"
        className="relative py-32 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-mono tracking-widest text-blue-400/80 mb-4 uppercase">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-slate-50">
              Designed to fracture.
              <br />
              <span className="text-slate-400">Built to hold.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              This portfolio is an exploration of controlled breakage. The hero
              above is not decoration — it is the statement. Glass shards,
              medial-axis cracks, and cold specular light demonstrate how
              precision and chaos can coexist.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Color theory here follows a restrained cool palette: deep
              near-black grounds (#030407), desaturated blues, and high-value
              specular highlights. Contrast is carefully tuned for legibility
              while preserving the fragile, crystalline atmosphere.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-300 font-mono text-sm">01</span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-100">Color System</h3>
                  <p className="text-sm text-slate-500">
                    Analogous cool blues + near-black
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-300 font-mono text-sm">02</span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-100">Material</h3>
                  <p className="text-sm text-slate-500">
                    Glass, fracture, specular light
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-300 font-mono text-sm">03</span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-100">Motion</h3>
                  <p className="text-sm text-slate-500">
                    Spring physics, no external deps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="py-32 px-6 md:px-12 lg:px-24 border-t border-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-mono tracking-widest text-blue-400/80 mb-4 uppercase">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-16 text-slate-50">
            Projects that break
            <br />
            the expected surface.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fracture System",
                desc: "Interactive glass-shard hero with real atlas masking, crack networks, and Web Audio crack ticks.",
                tags: ["React", "CSS Mask", "Web Audio", "3D Transforms"],
                href: "#",
              },
              {
                title: "Color Token Engine",
                desc: "Programmatic generation of accessible cool-tone palettes with automatic contrast validation.",
                tags: ["TypeScript", "Color Theory", "Design Tokens"],
                href: "#",
              },
              {
                title: "Portfolio Shell",
                desc: "This site — Next.js 15, Tailwind, shadcn structure, and the Broken by Design component as the centerpiece.",
                tags: ["Next.js", "Tailwind", "shadcn/ui"],
                href: "#",
              },
              {
                title: "Glass UI Kit",
                desc: "Reusable glassmorphism primitives that share the same light model as the hero shards.",
                tags: ["CSS", "Design System"],
                href: "#",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8 hover:border-blue-500/30 hover:bg-slate-900/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-6 md:px-12 lg:px-24 border-t border-slate-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono tracking-widest text-blue-400/80 mb-4 uppercase">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-slate-50">
            Let’s break something
            <br />
            <span className="text-slate-400">together.</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Open to collaborations, design systems work, and experimental
            interfaces that treat motion and material as first-class citizens.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/dharanidharan25351-blip"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 text-center">
        <p className="text-xs font-mono text-slate-600 tracking-wider">
          Built with the Broken by Design component · Color theory driven ·{" "}
          <a
            href="https://github.com/dharanidharan25351-blip/broken-by-design-portfolio"
            className="hover:text-slate-400 transition-colors"
          >
            Source
          </a>
        </p>
      </footer>
    </main>
  );
}

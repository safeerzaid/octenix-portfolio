export default function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-dark">
      <div className="max-w-[1200px] mx-auto px-8 max-[640px]:px-5 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Octenix" className="w-9 h-9 object-contain" />
          <span className="text-[1.5rem] font-extrabold tracking-[-0.5px] text-white">octenix</span>
        </div>
        <p className="text-text-muted text-[0.88rem]">© 2026 Octenix. All rights reserved. Crafted with ♥</p>
      </div>
    </footer>
  )
}

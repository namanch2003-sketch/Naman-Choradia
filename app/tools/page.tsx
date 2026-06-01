export const metadata = {
  title: 'Tools — Naman Choradia',
  description: 'AI tools and projects under development.',
}

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-8 py-[80px]">
      <div className="mb-12 pb-8 border-b border-[#e9e9e9]">
        <h1 className="font-cormorant text-[56px] text-[#0A1F44] mb-3">Tools</h1>
        <p className="font-inter text-[18px] text-[#555] max-w-[600px] leading-relaxed">
          AI tools and projects currently under development.
        </p>
      </div>
      <div className="flex items-center justify-center h-40">
        <p className="font-inter text-[16px] text-[#aaa]">
          Tools coming soon. Stay tuned.
        </p>
      </div>
    </div>
  )
}

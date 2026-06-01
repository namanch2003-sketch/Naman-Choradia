'use client'

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full font-inter text-[14px] border border-[#e9e9e9] px-4 py-3 outline-none focus:border-[#C9A227] transition-colors rounded-none"
      />
      <button
        type="submit"
        className="mt-2 w-full font-inter text-[13px] uppercase tracking-[1px] bg-[#0A1F44] text-white py-3 hover:bg-[#C9A227] transition-colors duration-200"
      >
        Subscribe
      </button>
    </form>
  )
}

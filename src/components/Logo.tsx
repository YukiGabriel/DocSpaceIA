import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <svg
        viewBox="0 0 40 40"
        className="size-8 transition-transform group-hover:rotate-12 duration-300"
        fill="none"
      >
        <circle cx="20" cy="20" r="9" className="fill-blue-600" />
        <ellipse cx="20" cy="20" rx="15" ry="5" className="stroke-blue-400" strokeWidth="2" transform="rotate(-20 20 20)" fill="none" />
        <circle cx="20" cy="20" r="9" className="fill-blue-600" />
        <ellipse cx="20" cy="20" rx="15" ry="5" className="stroke-blue-400" strokeWidth="2" transform="rotate(-20 20 20)" fill="none" opacity="0.6" />
        <circle cx="14" cy="16" r="1.5" className="fill-white" opacity="0.9" />
        <circle cx="23" cy="14" r="1" className="fill-white" opacity="0.7" />
        <circle cx="25" cy="22" r="0.8" className="fill-white" opacity="0.5" />
      </svg>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-white">DocSpace</span>
        <span className="text-blue-500">IA</span>
      </span>
    </Link>
  )
}

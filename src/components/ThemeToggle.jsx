import { Sun, Moon, Monitor } from 'lucide-react'

const options = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'system', icon: Monitor, label: 'System' },
]

export default function ThemeToggle({ theme, setTheme, compact = false }) {
  if (compact) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const Icon = theme === 'dark' ? Sun : Moon

    return (
      <button
        type="button"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} theme`}
        title={`Switch to ${nextTheme} theme`}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-fg/15 text-fg transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
      >
        <Icon size={18} />
      </button>
    )
  }

  return (
    <div role="group" aria-label="Theme" className="hidden gap-1 rounded-full border border-fg/15 p-1 md:flex">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-label={label}
          title={`${label} theme`}
          aria-pressed={theme === value}
          className={`rounded-full p-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            theme === value ? 'bg-accent text-bg' : 'text-muted hover:text-fg'
          }`}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  )
}
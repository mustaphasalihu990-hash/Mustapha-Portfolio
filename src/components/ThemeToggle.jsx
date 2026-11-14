import { Sun, Moon, Monitor } from 'lucide-react'

const options = [
  { value: 'light', icon: Sun, label: 'Light' },
  { value: 'dark', icon: Moon, label: 'Dark' },
  { value: 'system', icon: Monitor, label: 'System' },
]

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div role="group" aria-label="Theme" className="flex gap-1 rounded-full border border-fg/15 p-1">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={`rounded-full p-2 transition ${
            theme === value ? 'bg-accent text-bg' : 'text-muted hover:text-fg'
          }`}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  )
}
import { useState } from 'react'
import ColorCard from './components/ColorCard.jsx'
import styles from './App.module.css'

// --- Seed data: the palette Claude will eventually generate dynamically.
//     For now, this is hardcoded so we can build and style the UI first.
const SEED_PALETTE = {
  name: 'Calm Fintech for Gen Z',
  colors: [
    { hex: '#0a0f1e', name: 'Deep Navy',     role: 'Background' },
    { hex: '#111827', name: 'Surface Dark',  role: 'Surface'    },
    { hex: '#7c6af7', name: 'Soft Violet',   role: 'Primary'    },
    { hex: '#a78bfa', name: 'Lavender',      role: 'Secondary'  },
    { hex: '#34d399', name: 'Mint',          role: 'Success'    },
    { hex: '#f0f0f0', name: 'Off White',     role: 'Text'       },
  ],
}

function App() {
  // useState — App remembers which palette is being shown.
  // Later, this will be replaced by data from the Claude API.
  const [palette, setPalette] = useState(SEED_PALETTE)
  const [prompt, setPrompt] = useState('')

  // Placeholder for what will eventually call Claude
  function handleGenerate(e) {
    e.preventDefault()
    // In Month 3, this will call our Vercel serverless function → Claude API
    alert(`Coming in Month 3! You typed: "${prompt}"`)
  }

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Palette Studio</h1>
        <p className={styles.tagline}>Describe a mood. Get a palette.</p>
      </header>

      {/* Prompt input — this is where the AI integration will plug in */}
      <form className={styles.form} onSubmit={handleGenerate}>
        <input
          className={styles.input}
          type="text"
          placeholder="e.g. calm fintech app for Gen Z"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Generate
        </button>
      </form>

      {/* Palette display */}
      <section className={styles.paletteSection}>
        <h2 className={styles.paletteName}>{palette.name}</h2>
        <div className={styles.grid}>
          {/* .map() — React's way of rendering a list from an array */}
          {palette.colors.map((color) => (
            <ColorCard
              key={color.hex}
              hex={color.hex}
              name={color.name}
              role={color.role}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App

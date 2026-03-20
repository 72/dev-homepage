import { useState } from 'react'
import styles from './ColorCard.module.css'

/**
 * ColorCard — displays a single color swatch with its HEX code.
 *
 * Props:
 *   hex     (string) — e.g. "#7c6af7"
 *   name    (string) — e.g. "Soft Violet"
 *   role    (string) — e.g. "Primary", "Accent", "Background"
 */
function ColorCard({ hex, name, role }) {
  // useState — the component "remembers" whether the user just copied
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    // Reset after 1.5s so the UI returns to normal
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={styles.card}>
      {/* The swatch — background color comes from the hex prop */}
      <div
        className={styles.swatch}
        style={{ backgroundColor: hex }}
      />

      {/* Metadata below the swatch */}
      <div className={styles.meta}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>

        {/* Copy button — changes label on click */}
        <button
          className={`${styles.hexButton} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
          title="Copy HEX code"
        >
          {copied ? '✓ Copied' : hex}
        </button>
      </div>
    </div>
  )
}

export default ColorCard

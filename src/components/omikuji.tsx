"use client"

import { useState } from 'react'
import styles from './omikuji.module.css'

type Fortune = '大吉' | '中吉' | '小吉' | '吉' | '末吉' | '凶'

const fortunes: Fortune[] = ['大吉', '中吉', '小吉', '吉', '末吉', '凶']

const fortuneColors: Record<Fortune, string> = {
  '大吉': '#ef4444',
  '中吉': '#f97316',
  '小吉': '#eab308',
  '吉': '#22c55e',
  '末吉': '#3b82f6',
  '凶': '#a855f7'
}

export function Omikuji() {
  const [fortune, setFortune] = useState<Fortune | null>(null)

  const drawFortune = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    setFortune(randomFortune)
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>おみくじ</h1>
      <p className={styles.description}>運勢を占ってみよう</p>
      <div className={styles.content}>
        {fortune ? (
          <div 
            className={styles.fortune} 
            style={{ backgroundColor: fortuneColors[fortune] }}
          >
            {fortune}
          </div>
        ) : (
          <div className={styles.placeholder}>
            ?
          </div>
        )}
        <button onClick={drawFortune} className={styles.button}>
          おみくじを引く
        </button>
      </div>
    </div>
  )
}


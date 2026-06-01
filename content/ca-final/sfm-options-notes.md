---
title: "SFM Options — Complete Notes"
date: "2026-05-05"
description: "Comprehensive CA Final SFM options chapter notes covering pricing models, Greeks, strategies and exam-focused problem-solving techniques."
category: "ca-final"
slug: "sfm-options-notes"
---

## Options in CA Final SFM — Overview

The options chapter in SFM is one of the highest-weightage and most conceptually dense portions of the paper. Every attempt in recent years has had at least 14-16 marks from this chapter. Understanding it conceptually — not just formula-wise — is what separates 60+ scorers from the rest.

## Key Concepts to Master

### 1. Option Basics

An **option** is a contract that gives the buyer the right, but not the obligation, to buy (call) or sell (put) an underlying asset at a predetermined price (strike price) on or before a specified date (expiry).

Key terminology:
- **Premium** — the price paid for the option
- **In the Money (ITM)** — option has intrinsic value
- **At the Money (ATM)** — strike equals current market price
- **Out of the Money (OTM)** — option has no intrinsic value

### 2. Black-Scholes Model

The BSM formula is frequently tested in numerical problems. Key inputs:
- S = Current stock price
- K = Strike price
- r = Risk-free rate
- T = Time to expiry (in years)
- σ = Volatility (standard deviation of returns)

The formula: **C = S·N(d₁) − K·e^(−rT)·N(d₂)**

Where:
- d₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)
- d₂ = d₁ − σ√T

Exam tip: ICAI consistently provides N(d) values in the question. Focus on clean substitution and correct identification of d₁ and d₂.

### 3. The Greeks

| Greek | Measures | Direction |
|-------|----------|-----------|
| Delta | Price sensitivity | Call: 0 to 1, Put: -1 to 0 |
| Gamma | Rate of change of Delta | Always positive |
| Theta | Time decay | Always negative |
| Vega | Volatility sensitivity | Always positive |

### 4. Option Strategies

The most commonly tested strategies:

**Straddle** — buy a call and put at the same strike. Profits from large moves in either direction.

**Bull Call Spread** — buy lower strike call, sell higher strike call. Reduces cost, caps upside.

**Protective Put** — long stock + long put. Insurance against downside.

## Exam Strategy

For numerical questions, always:
1. Identify the option type (call/put, American/European)
2. Write down all given values clearly
3. Identify the model required (BSM, Binomial, or Put-Call Parity)
4. Show all intermediate steps — ICAI awards step marks generously

For theory questions, definitions with examples score full marks. Memorize the BSM assumptions and limitations — they appear as 4-5 mark theory questions regularly.

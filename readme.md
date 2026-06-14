# Stand-up Comedy Timer PWA

This Progressive Web App was born out of the frustration of not finding a reliable timer specifically designed for stand-up comedy sets. Traditional timers often fall short of meeting the unique demands of live performance, which led to the creation of this project.

## Why This App?

During numerous performances, I experienced the shortcomings of generic timers:
- **Silent Alerts:** Traditional timers often make loud noises when time is up, disrupting the flow of a set. This app uses subtle visual and haptic cues instead.
- **Screen Activity:** Conventional timers let your device sleep, risking missed cues. This app actively keeps the screen awake during the countdown.
- **Easy Glanceability:** In the middle of a performance, you need to quickly check the remaining time without breaking your focus. The large, clear display makes that possible.
- **High Visibility When Time’s Up:** When the time expires, the app employs bold visual alerts (like blinking effects) to ensure the signal is visible from a distance.

## Features

A clean, dark, glance-first interface designed for the stage.

- **Set your time fast:**  
  Minute/second steppers plus one-tap presets (3/5/7/10/15 min).

- **Two modes, picked automatically:**  
  - **Clock mode** (no script) — one big countdown **ring** fills the screen.
  - **Teleprompter mode** (paste a script, one line per row) — your lines scroll, the current line lit, with a thick vertical time bar on the right.

- **Color = remaining time, at a glance:**  
  The ring/bar sweep **continuously** from green → amber → red as the clock runs down, with a stepped status chip and shape cue: **● ON TRACK → ▲ LIGHT (25% left) → ■ WRAP UP (8% left) → ◆ OVER**. When time's up the whole screen flashes (0.5s on/off) and counts up the overtime.

- **Colorblind-safe mode:**  
  A setup toggle swaps to a blue → yellow → red palette plus redundant shape and label cues that read in grayscale.

- **Built for performing:**  
  Tap-to-mark **laugh tally**, one-tap **fullscreen**, tap to hide/show controls, swipe to nudge the prompter, A−/A+ text size, and **Re-sync**.

- **Responsive:**  
  Portrait and landscape on phones, tablets, and laptops.

- **Remembers your setup**, **haptic feedback** on time's-up, **screen wake-lock**, and full **PWA** offline/install support.

## Installation Instructions

### On Android

1. **Open in Chrome:**  
   Launch Chrome on your Android device and navigate to your hosted URL (e.g., `https://<your-username>.github.io/<repository-name>/`).

2. **Add to Home Screen:**  
   - Tap the three-dot menu icon in the top-right corner.
   - Select **"Add to Home screen"**.
   - Confirm the prompt.  
     The app icon will appear on your home screen, allowing you to launch it like a native app.

### On iOS

1. **Open in Safari:**  
   Open Safari on your iOS device and go to your hosted URL (e.g., `https://<your-username>.github.io/<repository-name>/`).

2. **Add to Home Screen:**  
   - Tap the **Share** button (the square with an arrow at the bottom).
   - Scroll down and select **"Add to Home Screen"**.
   - Optionally, rename the app and tap **"Add"**.  
     The app will now be accessible from your home screen.

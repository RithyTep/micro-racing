# Micro Racing 🏎️

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
[![Play Now](https://img.shields.io/badge/Play%20Now-Live%20Demo-success?style=for-the-badge)](https://github.com/RithyTep/micro-racing)

**A fast-paced multiplayer HTML5 racing game with real-time WebSocket gameplay.**

[Play](#play-now) • [Features](#features) • [Installation](#installation) • [Controls](#controls) • [Development](#development)

</div>

---

## 🎮 Play Now

> Experience real-time multiplayer racing right in your browser!

```bash
# Clone and run locally
git clone https://github.com/RithyTep/micro-racing.git
cd micro-racing
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## Features

- 🏁 **Real-time Multiplayer** - Race against friends with WebSocket synchronization
- 🎨 **Retro Graphics** - Beautiful pixel-art inspired visuals
- 🕹️ **Smooth Controls** - Responsive keyboard controls for precise handling
- 📱 **Cross-platform** - Works on desktop and mobile browsers
- 🏆 **Leaderboard** - Track your best times and compete globally
- 🔊 **Sound Effects** - Immersive audio experience
- 🌐 **No Installation** - Just open and play in any modern browser

## Screenshots

```
  ╔═══════════════════════════════════╗
  ║    🏎️  MICRO RACING  🏎️          ║
  ║                                   ║
  ║    ═══════════════════════        ║
  ║    |  🚗    🚙      🚕  |        ║
  ║    |       TRACK        |        ║
  ║    |  🚗         🚙     |        ║
  ║    ═══════════════════════        ║
  ║                                   ║
  ║    LAP: 2/3    TIME: 01:23:45    ║
  ╚═══════════════════════════════════╝
```

## Controls

| Key | Action |
|-----|--------|
| `↑` / `W` | Accelerate |
| `↓` / `S` | Brake / Reverse |
| `←` / `A` | Steer Left |
| `→` / `D` | Steer Right |
| `Space` | Handbrake / Drift |
| `Enter` | Ready / Start Race |
| `Esc` | Pause Menu |

## Installation

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/RithyTep/micro-racing.git
cd micro-racing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Canvas API** | Game rendering |
| **WebSocket** | Real-time multiplayer |
| **Node.js** | Game server |
| **Express** | HTTP server |

## Game Architecture

```
┌─────────────────┐     WebSocket     ┌─────────────────┐
│   Client 1      │◄──────────────────►│                 │
│   (Browser)     │                    │   Game Server   │
└─────────────────┘                    │   (Node.js)     │
                                       │                 │
┌─────────────────┐     WebSocket     │                 │
│   Client 2      │◄──────────────────►│                 │
│   (Browser)     │                    └─────────────────┘
└─────────────────┘
```

## Multiplayer Features

- **Room System** - Create private rooms or join public matches
- **Matchmaking** - Automatic skill-based matching
- **Spectator Mode** - Watch ongoing races
- **Chat** - In-game communication

## Contributing

We love contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/new-track`)
3. 💾 Commit your changes (`git commit -m 'Add new track'`)
4. 📤 Push to the branch (`git push origin feature/new-track`)
5. 🔃 Open a Pull Request

### Ideas for Contributions

- [ ] New race tracks
- [ ] Additional car skins
- [ ] Power-ups system
- [ ] Mobile touch controls
- [ ] AI opponents

## License

MIT License - feel free to use this project for learning or your own games!

---

<div align="center">

**Built with 🎮 by [Rithy Tep](https://github.com/RithyTep)**

⭐ Star this repo if you enjoy playing!

</div>

# 🏏 Nepal Premier League (NPL) Cricket Website

A full-stack, responsive web application for the **Nepal Premier League (NPL)** featuring real-time scores, match schedules, points table, top run scorers, top wicket takers, and franchise squad breakdowns.

---

## 🌟 Key Features

1. **🔴 Real-Time Live Cricket Scores**
   - Integrates with the **CricketData.org API** (`/v1/cricScore`)
   - Auto-refreshes every 20 seconds with smart caching to protect your 100 hit/day free-tier quota
   - Displays live runs, wickets, overs, current run rate (CRR), and match status

2. **📅 Complete NPL Match Center (All 32 Matches)**
   - League stage matches (Matches 1 to 28)
   - Playoff fixtures: Eliminator, Qualifier 1, Qualifier 2, and Grand Final
   - Filter between **All**, **League Stage**, and **Playoffs**
   - Clickable match cards open interactive scorecards with toss results, top batter, top bowler, and MOTM

3. **🏆 Points Table & Standings**
   - Complete tournament standings with Matches Played, Won, Lost, Net Run Rate (NRR), and Points
   - Qualification highlights for top 4 playoff teams
   - Tournament podium results: Champion (Janakpur Bolts), Runner-Up (Sudurpaschim Royals), 3rd Place (Karnali Yaks)

4. **📊 Tournament Leaderboards & Statistics**
   - **Highest Scorer:** Most runs across the tournament (Lahiru Milantha, Dipendra Singh Airee, Anil Sah, etc.)
   - **Top Wicket Takers:** Most wickets taken (Lalit Rajbanshi, Scott Kuggeleijn, William Bosisto, etc.)
   - **Player of the Match (MOTM) Awards** leaderboard
   - **Highest Individual Scores** (runs, balls faced, strike rates, 4s & 6s)
   - **Best Bowling Spells** and **Best Economy Rates**

5. **🛡️ Franchises & Squads**
   - All 8 teams: Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Karnali Yaks, Kathmandu Gurkhas, Lumbini Lions, Pokhara Avengers, Sudurpaschim Royals
   - Marquee players and full rosters (including domestic & overseas stars like Shikhar Dhawan, Martin Guptill, James Neesham, Marchant de Lange)

---

## 🔑 Configured API Keys

| Service | Key / Config | Purpose |
|---|---|---|
| **CricketData.org** | `ee0291e9-6ef5-44d3-b0b5-52767c556eec` | Live global match feeds, live scores, scorecards |
| **OpenCricket API** | `oc_live_3lmsFbQRi2Ae97vHqarRUdglc4bRz75D` | Ball-by-ball delivery endpoints |
| **Nepal Premier League API** | GitHub repository + Local database fallback | Detailed 32-match NPL stats, rosters, and standings |

---

## 🚀 How to Run the Website

```bash
cd C:\Users\mebhu\.gemini\antigravity\scratch\npl-website
npm install
npm start
```

Open your browser and navigate to:
```
http://localhost:3000
```

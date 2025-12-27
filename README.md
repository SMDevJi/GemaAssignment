#  Student Speaking Assessment Report

This project is a frontend-focused functional prototype of a Student Speaking Assessment Report page, inspired by platforms like SpeechAce / IELTS score reports.

It displays:
- Overall speaking score
- Skill-wise scores (Pronunciation, Fluency, Vocabulary, Grammar)
- Visual representation using progress bars / charts
- Dynamic descriptive feedback based on scores


---
##  Deployed URL for Demo
[https://gemaassignment.onrender.com](https://gemaassignment.onrender.com)

---
##  Demo Video
<video src="https://github.com/user-attachments/assets/d42a5761-68a8-4ced-951e-eb556c6d1404" controls width="600"></video>





---

##  How to Run the Project

### Prerequisites
- Node.js
- npm or pnpm

### Steps
```bash
git clone https://github.com/SMDevJi/GemaAssignment.git
npm install
npm run dev
```

Open the app in your browser at:
```
http://localhost:5173
```

---

##  Where the Scores Are Stored

All data is stored in a single JSON file:

```
src/reportData.json
```

This file contains:
- Student details (name, date)
- Scores for multiple frameworks:
  - SpeechAce
  - CEFR
  - IELTS
  - PTE
  - TOEFL
  - TOEIC
- Skill-wise scores for each framework
- Feedback rules for numeric and CEFR-based scoring

The frontend reads directly from this file. No database or backend is used.

---

##  How Feedback Logic Works

Feedback is rule-based and data-driven.

### Numeric frameworks
Scores are evaluated against ranges defined in `reportData.json`:
- Score ≥ 8 → Excellent performance
- Score 6–7 → Good performance
- Score < 6 → Needs improvement

The UI selects the first matching rule based on the score value.

---

### CEFR framework
CEFR feedback is mapped directly to level labels:
- A1 → Very limited
- A2 → Basic
- B1 → Adequate
- B2 → Good
- C1 → Advanced
- C2 → Near-native

Displayed value: CEFR level  
Progress bars: Levels are internally mapped to percentages for visualization only.

---

##  Tech Stack
- React (Vite)
- JavaScript
- Tailwind CSS
- shadcn/ui (Dialog, Accordion)
- JSON-based data source



# 🚀 TestLens

TestLens is a lightweight test report analyzer that helps engineers quickly understand test failures, identify flaky tests, and get actionable insights from test results.

---

## 🧠 Why TestLens?

In real-world projects:

* Test failures are noisy
* Flaky tests waste debugging time
* CI pipelines lose reliability
* Engineers spend time figuring out *what actually failed*

TestLens helps cut through that noise.

---

## ✨ Features

* 📂 Upload test result JSON (Playwright/Jest style)
* 📊 Summary view (Total / Passed / Failed)
* 🧪 Test list with clear status indicators
* ⚠️ Flaky test detection (basic heuristic)
* 🔍 Filter tests (All / Failed / Flaky)
* 💡 Suggestions for failed tests (possible causes & fixes)

---

## 🛠️ Tech Stack

* React + TypeScript
* Vite
* Basic CSS (no UI frameworks)
* FileReader API for local file parsing

---

## 📸 Preview

> Upload a test report → instantly see failures, flaky tests, and insights

---

## 🧪 Example Use Case

* Upload CI test results
* Quickly identify:

  * real failures
  * flaky tests
  * potential root causes

---

## ⚠️ Current Limitations

* Flaky detection is heuristic-based (not historical)
* Suggestions are static (AI integration planned)
* No backend / persistence yet

---

## 🚀 Future Improvements

* AI-powered failure analysis
* Historical test tracking
* CI/CD integration (GitHub Actions, etc.)
* Team dashboards

---

## 💡 Inspiration

Built from real-world experience in QA and frontend engineering to bridge the gap between test execution and meaningful insights.

---

## 👨‍💻 Author

Prince Malik
Senior SDET → Frontend Engineer (in transition)

---

## ⭐️ If you find this useful

Give it a star or share your feedback!

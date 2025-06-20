# Quiz App

A simple React Native quiz app built with Expo.

## How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. Start the app:

```bash
npm start
```
3. Run on your device:

Install the Expo Go app on your phone

Scan the QR code that appears in the terminal

## How to Modify Questions
Edit the questions in App.js:

```bash
const quizData = [
  {
    question: 'What is the capital of Eritrea?',
    options: ['Mendefera', 'Asmara', 'Keren', 'Massawa'],
    answer: 'Asmara'
  },
  // Add more questions like above
]

```
## Requirements
Node.js (version 16 or newer)

Expo Go app (for testing on phone)

Troubleshooting
If you get errors:

Try clearing npm cache:

```bash
npm cache clean --force
```
Reinstall dependencies:

```bash
rm -rf node_modules
npm install
```
text

### How to add this to your project:

1. Create a new file named `README.md` in your project's main folder
2. Paste the above content
3. Save the file

### To upload to GitHub:

```bash
git add README.md
git commit -m "Add simple README file"
git push
```

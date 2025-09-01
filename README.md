# 🎨 GoGreener-CommitArt 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Forks](https://img.shields.io/github/forks/zSayf/GoGreener-CommitArt-.svg)](https://github.com/zSayf/GoGreener-CommitArt-/network/members)
[![Stars](https://img.shields.io/github/stars/zSayf/GoGreener-CommitArt-.svg)](https://github.com/zSayf/GoGreener-CommitArt-/stargazers)

A powerful toolkit featuring a web-based designer and an ultra-fast Node.js script to create stunning custom artwork on your GitHub contribution graph.

![Tool Preview](https://raw.githubusercontent.com/zSayf/GoGreener-CommitArt-/main/Assests/Sayf%20Art%20Maker.png)

> **⚠️ A Note on Responsible Use**
> This tool is designed for educational and artistic purposes. Please be aware that generating a high volume of automated commits may be against the spirit of GitHub's contribution graph and could potentially violate their Terms of Service. It should **not** be used to misrepresent your work history or activity level. **Please use this tool responsibly and at your own risk.**

## 🚀 How to Create Your Contribution Art

This guide is broken into two parts. **Part A** is a one-time setup to ensure your GitHub account and local environment are ready. **Part B** is the fun part where you create your art.

### **Part A: One-Time Setup (Do This First!)**

Completing these steps first will prevent 99% of common issues.

#### Step 1: Fork This Repository

Click the **"Fork"** button at the top-right of this page. This creates your own personal copy of the project under your GitHub account.

#### Step 2: Make Your Forked Repository Private (Crucial!)

To keep the scripted commit history hidden from your public profile, you must make your newly forked repository private.

1.  On the page of your forked repository, go to **Settings**.
2.  Scroll down to the **"Danger Zone"**.
3.  Find "Change repository visibility" and click the **"Change visibility"** button.
4.  Select **"Make private"** and follow the on-screen instructions to confirm.

#### Step 3: Enable Private Contributions on Your Profile

For the art to be visible on your public profile, you must enable a key setting.

1.  Go to your main GitHub profile page.
2.  Find your contribution graph and click the **"Contribution settings"** dropdown menu.
3.  Ensure the **"Private contributions"** option is checked.

![Enable Private Contributions](https://i.giphy.com/rsiToCxIO6ePpYAuWH.webp)

#### Step 4: Configure Your Local Git Identity

Your computer needs to know which GitHub account to assign the commits to.

1.  Open your terminal (Git Bash, PowerShell, or your editor's terminal).
2.  **Check your current Git configuration** with these commands:
    ```bash
    git config --global user.name
    git config --global user.email
    ```
3.  **If the output does not match your GitHub username and email exactly**, update them. (Replace the placeholder text with your actual info).
    ```bash
    git config --global user.name "YourGitHubUsername"
    git config --global user.email "your-github-email@example.com"
    ```

### **Part B: Creating Your Art**

Now that your setup is complete, you can create your design.

#### Step 1: Clone Your Private Fork

Get a local copy of your project where you'll run the script.

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git clone https://github.com/YOUR-USERNAME/GoGreener-CommitArt-.git
cd GoGreener-CommitArt-
```

#### Step 2: Install Dependencies

In your terminal, inside the `GoGreener-CommitArt-` folder, run this command once:

```bash
npm install
```

#### Step 3: Design Your Art with the Sayf Art Maker

1.  Open the `Sayf Art Maker.html` file from this repository in your web browser.
2.  Use the on-screen controls to create your design visually.
3.  When you're finished, click the **🚀 Generate Code** button.
4.  **Copy the entire script** that appears in the text area.

#### Step 4: Run the Script

1.  Return to your code editor and open the `index.js` file in your local repository.
2.  **Delete all existing content** in `index.js` and **paste the code you copied** from the Art Maker.
3.  Save the `index.js` file.
4.  Run the script from your terminal:
    ```bash
    node index.js
    ```

The script will now generate and push all the commits. After a few minutes, check your GitHub profile to see your new masterpiece!

---

## Credits

This project was inspired by and adapted from the excellent video tutorial created by **[Fenrir](https://www.youtube.com/@itsFenrir)**. The original repository is [fenrir2608/goGreen](https://github.com/fenrir2608/goGreen).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

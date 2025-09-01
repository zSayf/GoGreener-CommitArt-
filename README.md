# 🎨 GoGreener-CommitArt - A WAY BETTER VERSION 🚀

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

#### Step 1: Create a New, Blank Private Repository on GitHub

To keep the scripted commit history hidden, you must use a **private** repository. Since you cannot make a fork private, the correct way is to create a fresh one.

1.  On GitHub, click the `+` icon in the top right and select **"New repository"**.
2.  Give it a name (e.g., `my-commit-art`).
3.  Crucially, select the **"Private"** option.
4.  **Do NOT** initialize it with a README, .gitignore, or license file. It should be completely empty.
5.  Click **"Create repository"**.

#### Step 2: Enable Private Contributions on Your Profile

For the art to be visible on your public profile, you must enable this key setting.

1.  Go to your main GitHub profile page.
2.  Find your contribution graph and click the **"Contribution settings"** dropdown menu.
3.  Ensure the **"Private contributions"** option is checked.

![Enable Private Contributions](https://i.giphy.com/rsiToCxIO6ePpYAuWH.webp)

#### Step 3: Configure Your Local Git Identity

Your computer needs to know which GitHub account to assign the commits to.

1.  Open your terminal (Git Bash, PowerShell, etc.).
2.  **Check your current Git configuration:**
    ```bash
    git config --global user.name
    git config --global user.email
    ```
3.  **If they do not match your GitHub username and email exactly**, update them:
    ```bash
    git config --global user.name "YourGitHubUsername"
    git config --global user.email "your-github-email@example.com"
    ```

### **Part B: Creating Your Art**

Now that your setup is complete, you can create your design.

#### Step 1: Get the Project Files Locally

Clone this repository (`GoGreener-CommitArt-`) to your computer to get the necessary files.

```bash
git clone https://github.com/zSayf/GoGreener-CommitArt-.git
cd GoGreener-CommitArt-
```

#### Step 2: Push the Code to Your New Private Repository

Now, link the local files to your new private repository and push them.

```bash
# Replace YOUR-USERNAME and YOUR-PRIVATE-REPO-NAME with your own details.
# This command sets the destination for your code to be your private repo.
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-PRIVATE-REPO-NAME.git

# This command pushes the files to your private repo.
git push -u origin main
```
Your private repository on GitHub should now contain all the files from this project.

#### Step 3: Install Dependencies

In your terminal, inside the `GoGreener-CommitArt-` folder, run this command once:

```bash
npm install
```

#### Step 4: Design Your Art with the Sayf Art Maker

1.  Open the `Sayf Art Maker.html` file in your web browser.
2.  Use the on-screen controls to create your design visually.
3.  When finished, click **🚀 Generate Code**.
4.  **Copy the entire script** that appears in the text area.

#### Step 5: Run the Script

1.  Open the `index.js` file in your local repository.
2.  **Delete all existing content** and **paste the code you copied** from the Art Maker. Save the file.
3.  From your terminal, run the script:
    ```bash
    node index.js
    ```

The script will now generate and push all the commits to your **private repository**. After a few minutes, check your GitHub profile to see your new masterpiece!

---

## Credits

This project was inspired by and adapted from the excellent video tutorial created by **[Fenrir](https://www.youtube.com/watch?v=LlkcvvGbs9I&pp=ygUlaGFjayBnaXRodWIgY29udHJpYnV0aW9uIGdyYXBoICgyMDI1KQ%3D%3D)**. The original repository is [fenrir2608/goGreen](https://github.com/fenrir2608/goGreen).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# 🎨 GoGreener-CommitArt - A WAY BETTER VERSION 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Forks](https://img.shields.io/github/forks/zSayf/GoGreener-CommitArt-.svg)](https://github.com/zSayf/GoGreener-CommitArt-/network/members)
[![Stars](https://img.shields.io/github/stars/zSayf/GoGreener-CommitArt-.svg)](https://github.com/zSayf/GoGreener-CommitArt-/stargazers)

A powerful toolkit featuring a web-based designer and an ultra-fast Node.js script to create stunning custom artwork on your GitHub contribution graph.

![Tool Preview](https://raw.githubusercontent.com/zSayf/GoGreener-CommitArt-/main/Assests/Sayf%20Art%20Maker.png)

> **⚠️ A Note on Responsible Use**
> This tool is designed for educational and artistic purposes. Please be aware that generating a high volume of automated commits may be against the spirit of GitHub's contribution graph and could potentially violate their Terms of Service. It should **not** be used to misrepresent your work history or activity level. **Please use this tool responsibly and at your own risk.**

## 🚀 The Ultimate Guide to Creating Your Contribution Art

This guide is broken into two main parts. **Part A** is a one-time setup to prepare your GitHub account and local environment. **Part B** is where you'll create and deploy your art.

### **Part A: Preparing Your Workspace (One-Time Setup)**

Follow these steps carefully to ensure everything works perfectly.

#### Step 1: Create a New, Blank Private Repository

First, you need a private and empty "canvas" on GitHub where your art will be stored.

1.  On GitHub, click the `+` icon in the top right and select **New repository**.
2.  Give it a simple name, like `commit-art-canvas`.
3.  Select the **Private** option. This is essential to keep the commit history hidden.
4.  **Important:** Do **NOT** initialize it with a README or any other files. It must be completely blank.
5.  Click **Create repository**.

#### Step 2: Configure Your GitHub Profile for Private Contributions

This step makes your private art visible on your public profile graph.

1.  Go to your main GitHub profile page.
2.  Click the **Contribution settings** dropdown menu above your graph.
3.  Ensure the **Private contributions** option is checked.

![Enable Private Contributions](https://i.giphy.com/rsiToCxIO6ePpYAuWH.webp)

#### Step 3: Configure Your Local Git Identity

Your computer needs to know which GitHub account to make commits for.

1.  Open your terminal (Git Bash, PowerShell, or your editor's terminal).
2.  **Check your current Git configuration:**
    ```bash
    git config --global user.name
    git config --global user.email
    ```
3.  **If the output does not match your GitHub username and email exactly**, update them:
    ```bash
    git config --global user.name "YourGitHubUsername"
    git config --global user.email "your-github-email@example.com"
    ```

### **Part B: Creating and Running Your Art**

Now for the fun part!

#### Step 1: Mirror this Toolkit to Your Private Repository

We will now copy the entire `GoGreener-CommitArt` toolkit into the private repository you just created.

1.  First, clone this public project but with a special `--bare` flag:
    ```bash
    git clone --bare https://github.com/zSayf/GoGreener-CommitArt-.git
    cd GoGreener-CommitArt-.git
    ```
2.  Now, push a mirror of it to your private repository. Replace `YOUR-USERNAME` and `YOUR-PRIVATE-REPO-NAME` with your own details.
    ```bash
    git push --mirror https://github.com/YOUR-USERNAME/YOUR-PRIVATE-REPO-NAME.git
    ```
3.  You can now safely delete the local folder we just used.
    ```bash
    cd ..
    rm -rf GoGreener-CommitArt-.git
    ```

#### Step 2: Clone Your Private Repository

Now, clone the private repository (which contains the tools) to your machine. This is the folder you will work in.
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-PRIVATE-REPO-NAME.git
cd YOUR-PRIVATE-REPO-NAME
```

#### Step 3: Install Dependencies

In your terminal, inside your new private repo folder, run:
```bash
npm install
```

#### Step 4: Design, Generate, and Run

1.  Open the `Sayf Art Maker.html` file in your web browser.
2.  Create your design and click **🚀 Generate Code**.
3.  **Copy the entire script** from the text area.
4.  Paste the copied code into your local `index.js` file, replacing its contents.
5.  Save the file and run the script from your terminal:
    ```bash
    node index.js
    ```
Your script will now run and push the art to your private repository, and the contributions will appear on your public graph.

---

## Credits

This project was inspired by and adapted from the excellent video tutorial created by **[Fenrir](https://www.youtube.com/watch?v=LlkcvvGbs9I&pp=ygUlaGFjayBnaXRodWIgY29udHJpYnV0aW9uIGdyYXBoICgyMDI1KQ%3D%3D)**. The original repository is [fenrir2608/goGreen](https://github.com/fenrir2608/goGreen).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

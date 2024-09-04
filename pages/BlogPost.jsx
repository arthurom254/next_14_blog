import BunnerImg from '@/app/atom.svg'
import Image from 'next/image';
import { ArrowUp, Calendar, MessageCircle, Share } from 'react-feather';
import ReactMarkdown from 'react-markdown';

const blogContent = `
# Blog Title: How to Install Gobuster in Termux: A Step-by-Step Guide

#### Introduction

Gobuster is a powerful tool used for brute-forcing URIs (directories and files) and DNS subdomains, making it essential for penetration testers and cybersecurity enthusiasts. Installing Gobuster on Termux, a terminal emulator for Android, allows you to run this tool directly on your Android device. In this guide, we'll walk you through the step-by-step process to install Gobuster on Termux and show you how to use it with the default wordlist.

#### Prerequisites
![CSS Tips for Developers](https://picsum.photos/500/500)

Before you begin, make sure you have:

1. **Termux Installed:** Download and install Termux from the [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) or from [F-Droid](https://f-droid.org/en/packages/com.termux/).
2. **Internet Connection:** Ensure that your device is connected to the internet.
3. **Sufficient Storage:** Make sure you have enough storage on your device as this process will download and compile some files.

#### Step 1: Setting Up Termux Storage and Repositories

Before installing any packages, you need to configure Termux to access storage and set up the correct repositories. This step ensures that Termux can manage files properly and download necessary tools.

\`\`\`bash
termux-setup-storage
termux-change-repo
\`\`\`

- **termux-setup-storage:** This command allows Termux to access your device’s file system.
- **termux-change-repo:** This command helps you choose the best repository for your location, ensuring faster downloads.

#### Step 2: Updating and Upgrading Termux Packages

Updating and upgrading the package list ensures you have the latest software and security patches.

\`\`\`bash
apt update -y && apt upgrade -y
\`\`\`

- **apt update -y:** Updates the list of available packages.
- **apt upgrade -y:** Installs the latest versions of all installed packages.

#### Step 3: Installing Golang and Git

Gobuster is written in Go, so you'll need to install Golang (Go programming language) and Git to clone the Gobuster repository.

\`\`\`bash
pkg install golang git -y
\`\`\`

- **pkg install golang git -y:** Installs Golang and Git, both of which are necessary for running and compiling Gobuster.

#### Step 4: Cloning the Gobuster Repository
![CSS Tips for Developers](https://picsum.photos/800/400)


Next, you'll clone the Gobuster repository from GitHub to your Termux environment.

\`\`\`bash
git clone https://github.com/OJ/gobuster
\`\`\`

- **git clone https://github.com/OJ/gobuster:** Downloads the Gobuster source code from its official repository.

#### Step 5: Moving Gobuster to the Correct Directory

To ensure that Go can find and compile Gobuster, you need to move the cloned directory to the correct Go workspace.

\`\`\`bash
mv gobuster /data/data/com.termux/files/usr/lib/go/src/
\`\`\`

- **mv gobuster /data/data/com.termux/files/usr/lib/go/src/:** Moves the Gobuster directory to Go’s source directory in Termux.

#### Step 6: Initializing the Gobuster Module

With the files in place, you'll initialize a Go module for Gobuster. This module helps manage dependencies.

\`\`\`bash
go mod init gobuster
\`\`\`

- **go mod init gobuster:** Initializes a new Go module in the Gobuster directory.

#### Step 7: Downloading Dependencies

Gobuster requires some external libraries to function. Use the \`go get\` command to download these dependencies.

\`\`\`bash
go get github.com/OJ/gobuster/v3/cli/cmd
\`\`\`

- **go get github.com/OJ/gobuster/v3/cli/cmd:** Downloads and installs the necessary libraries for Gobuster.

#### Step 8: Running Gobuster

Finally, you can run Gobuster directly from Termux using the \`go run\` command.

\`\`\`bash
go run gobuster
\`\`\`

- **go run gobuster:** Compiles and runs Gobuster from the source code.

### How to Use Gobuster with the Default Wordlist

Gobuster comes with a basic wordlist that you can use to perform directory brute-forcing. Here’s how you can use Gobuster with the default wordlist:

#### Step 1: Locate the Default Wordlist

Termux doesn't come with a pre-installed wordlist, so you’ll need to download one. A commonly used wordlist is the \`directory-list-2.3-medium.txt\` from SecLists.

#### Download the Wordlist:
\`\`\`bash
mkdir -p ~/wordlists
cd ~/wordlists
curl -O https://raw.githubusercontent.com/danielmiessler/SecLists/master/Discovery/Web-Content/directory-list-2.3-medium.txt
\`\`\`

- **mkdir -p ~/wordlists:** Creates a directory named "wordlists" in your home directory.
- **curl -O ...:** Downloads the wordlist file from the SecLists GitHub repository.

#### Step 2: Run Gobuster with the Wordlist

Now, you can use Gobuster to brute-force directories using the downloaded wordlist.

\`\`\`bash
go run gobuster dir -u http://example.com -w ~/wordlists/directory-list-2.3-medium.txt
\`\`\`

- **go run gobuster dir -u http://example.com -w ~/wordlists/directory-list-2.3-medium.txt:** Runs Gobuster with the specified URL and wordlist to discover hidden directories.

#### Understanding the Command:
- **dir:** Specifies that Gobuster will perform directory brute-forcing.
- **-u http://example.com:** The target URL where you want to discover directories.
- **-w ~/wordlists/directory-list-2.3-medium.txt:** The path to the wordlist you want to use.

#### Step 3: Analyze the Results

Gobuster will start brute-forcing directories and list the ones it finds. Review these results to identify any hidden directories on the target site.

#### Example Output:
\`\`\`
/admin (Status: 301)
/images (Status: 200)
/uploads (Status: 403)
\`\`\`

- **/admin:** Indicates a possible admin directory with a status code of 301 (redirect).
- **/images:** A directory with public access (status 200).
- **/uploads:** A restricted directory (status 403).

#### Conclusion

Congratulations! You have successfully installed Gobuster on Termux and learned how to use it with a default wordlist for directory brute-forcing. Gobuster is a versatile tool, and by utilizing different wordlists and options, you can tailor it to suit various penetration testing scenarios.

#### FAQs

**1. Why do I need Golang to run Gobuster?**
   - Gobuster is written in Go, so Golang is required to compile and run the tool.

**2. Can I run Gobuster without installing it?**
   - Yes, by using the \`go run gobuster\` command, you can run it directly from the source without installing it globally.

**3. What do I do if I encounter errors during installation?**
   - Ensure all commands are entered correctly and that you have a stable internet connection. You may also need to check if your Termux repositories are up-to-date.

**4. Can I use Gobuster on non-rooted devices?**
   - Yes, Gobuster can run on non-rooted devices through Termux.

**5. How do I update Gobuster?**
   - To update Gobuster, simply navigate to the Gobuster directory in Termux, run \`git pull\` to fetch the latest updates, and then recompile using the \`go run gobuster\` command.

Let me know if you would like to install more tools or need any further assistance!
`;

const comments = [
  {
    id: 1,
    author: 'Jane Doe',
    content: 'Great post! Really enjoyed reading it.',
    date: 'August 30, 2024',
  },
  {
    id: 2,
    author: 'John Smith',
    content: 'I have a question about the second part.',
    date: 'August 31, 2024',
  },
];

const BlogPost = ({ params }) => {
  const { slug } = params;

  
  return (
    <>
      <div className="rounded flex text-center items-center relative">
          <div className="absolute inset-1 bg-blue-400/20 blur-3xl filter -z-10 "></div>
          <div className="absolute inset-1 bg-transparent "></div>
          <Image  src={BunnerImg} alt="" />
      </div>
    <div className="w-full ">
      <article>
        <ReactMarkdown>
          {blogContent}
        </ReactMarkdown>
      </article>
    </div>

    <div className="border-y p-5  border-gray-200 flex justify-between items-center ">
      <span className='flex gap-4'>
        <span className='flex ' title='up vote'>
          <span className='p-1 font-bold'><ArrowUp/></span>
          <span className='p-1 text-gray-400'>2.5k</span>
          <p className="sr-only">Up vote button</p>
        </span>
        <span className='flex' title='comment'>
          <span className='p-1 font-bold'><MessageCircle/></span>
          <span className='p-1 text-gray-400'>100</span>
          <p className="sr-only">Write a comment button</p>
        </span>
      </span>

      <span className='flex' title='share'>
        <p className='sr-only'>Share button</p>
        <span className='p-1 font-bold'><Share/></span>
      </span>
    </div>

    <section className="mt-16">
    <h2 className="text-2xl font-bold mb-4">Comments</h2>
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 bg-blue-400/30 rounded-lg">
            <strong>{comment.author}</strong>
            <span className='flex gap-3 items-center '>
              <Calendar/> {comment.date}
            </span>
          <p>{comment.content}</p>
        </div>
      ))}
      <div>
        <div className="">
          <form action="">
            <div className="grid grid-cols-2 gap-3 p-3">
              <input type="text" className='col-span-full md:col-span-1 outline-none p-2 focus:text-black invalid:text-red-500 valid:text-lime-600' placeholder='Name' />
              <input type="email" className='col-span-full md:col-span-1 outline-none  p-2 focus:text-black invalid:text-red-500 valid:text-lime-600' placeholder='Email' />
              <textarea name="" className='col-span-full outline-none p-2 focus:text-black invalid:text-red-500 valid:text-lime-600' placeholder='Comment ' id=""></textarea>
              <button type='submit' className='bg-blue-400/30 p-2 rounded '>Submit</button>
              <button type='reset' className='bg-red-400/30 p-2 rounded '>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default BlogPost;

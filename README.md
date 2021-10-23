# password-manager

I wanted to use a password manager where the user, You, are in charge of their data. So i made one. Instead of having one ecryption key for all users.  
This CLI program uses unqiue keys for everyone which is stored on your own PC.  

# Setup  
  
You need Node.js and ts-node installed.  
  
Step 1 - Change your working directory to the project's  
Step 2 - Run `npm i`  
Step 3 - Rename `.env.example` to `.env` in the source folder and add the conection string to your mongo db server  
Step 4 - Run `ts-node tests/index.ts`  

# Why use this manager instead of the popular trusted ones
Those software don't make you the power user. They have a centralized system which means 1 leak is resulting in leak of all user data. Whereas my open source software gives u full control of the core, has unique encryption keys for everyone  , and stores data in user provided databases ensuring a leak doesn't compromise everyone

# Images

![image](https://user-images.githubusercontent.com/68459855/137897773-65048143-4133-4354-9487-b12dabeeec4a.png)

![image](https://user-images.githubusercontent.com/68459855/137897884-7e7baa87-2331-4696-998e-427df47e8c36.png)

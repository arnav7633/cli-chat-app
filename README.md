# password-manager

I wanted to use a password manager where the user, You, are in charge of their data. So i made one. Instead of having one ecryption key for all users.  
This CLI program uses unqiue keys for everyone which is stored on your own PC.  

#setup  
  
You need Node.js and ts-node installed.  
  
Step 1 - Change your working directory to the project's  
Step 2 - Run `npm i` /n  
Step 3 - Rename `.env.example` to `.env` in the source folder and add the conection string to your mongo db server  
Step 4 - Run `ts-node tests/index.ts`  

# Github Create Repo

## What it does?

* Github Create Repo is a small website made using NestJS in the backend and basic HTML CSS in the frontend.  
* It allows anyone to authorize their github account and the code will create a sample repo with some files in their account.
* On clicking on `Create Repo` button, it will take the user to their Github account where they can grant permissions to their account.
* After authorisation is complete, it will create a repo named `sample-code` in the user’s account with some sample code.  

## Website Live Link  
[Website Link](https://create-repo-luek4h7hy-anubhutigupta2409.vercel.app/)

## Demo Video
[Demo Video](https://youtu.be/1g_jbjNvkRA) {YouTube Unlisted Video}  

## App Flow
![untitled@2x (1)](https://user-images.githubusercontent.com/56643076/210061927-754c84bb-317e-4970-849f-8c763082074d.png)  

## Software Installations 
  
* Install Node.js from [here](https://nodejs.org/en/).  

## Instructions  

### Github App setup  
* Click on `New OAuth App` button to create a Github App from [here](https://github.com/settings/developers)  
* Provide `Application name` of your choice  
* Add `http://localhost:3000/` as `Homepage URL` and `http://localhost:3000/github/callback` as `Authorization callback URL`  
* Click on `Register Application` to complete the creation process.
* Then copy the `Client ID` and `generate a new client secret` and save them somwhere for future use.  

### NestJS App Setup
* Open Terminal and run the following code to clone the repository  
```
git clone https://github.com/anubhutigupta2409/github-create-repo.git 
```
* Change directory (cd) into the project directory and run the following command to install all the dependencies 
``` 
 npm install
 ```
* Inside the project directory create a `.env` file with the following contents  
```
 GITHUB_CLIENT_ID= *paste your client id*  
 GITHUB_CLIENT_SECRET= *paste your client secret*  
 GITHUB_SCOPES= repo
```  
* You can also edit the `templateRepo.json` file to change the template repo from which the new repo is created  


## How to run the project

In the project directory, you can run:
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser  

## References  

* [NestJS documentation](https://nestjs.com/)
* [Github documentation for Github App creation](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app)
* [Github REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28)  
* [Github SDKs](https://github.com/octokit)


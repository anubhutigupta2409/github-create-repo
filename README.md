# Github Create Repo

## What it does?

* Github Create Repo is a small website made using NestJS in the backend and basic HTML CSS in the frontend.  
* It allows anyone to authorize their github account and the code will create a sample repo with some files in their account.
* On clicking on `Create Repo` button, it will take the user to their Github account where they can grant permissions to my account.
* After authorisation is complete, it will create a repo in the user’s account with some sample code.  

## Website Live Link

## Demo Video
[Demo Video](https://www.youtube.com/watch?v=DgARl1SxYAA) {YouTube Unlisted Video}  

## App Flow
![untitled@2x](https://user-images.githubusercontent.com/56643076/206699768-bb448d6f-3364-42c0-882e-9788187a192e.png)  

## Software Installations 
  
* Install Node.js from [here](https://nodejs.org/en/).  

## Instructions  

### Github App setup  
* Click on `New OAuth App` button to create a Github App from [here](https://github.com/settings/developers)  
* Provide `Application name` of your choice  
* Add `http://localhost:3000/` as `Homepage URL` and `http://localhost:3000/github/callback` as `Authorization callback URL`  
* Click on `Register Application` to complete the creation process.
* Then copy the `Client ID` and `generate a new client secret` and save them somwhere for future use.  

### Nestjs App Setup
* Open Terminal and run the following code to clone the repository  
#### `git clone https://github.com/anubhutigupta2409/github-create-repo.git`  
* Change directory (cd) into the project directory and run the following command to install all the dependencies

## Dependencies to isntall  

In the project directory install the following dependencies using the following command:

#### `npm i concurrently cors express mongodb morgan react react-dom react-scripts socket.io --save ` 

In the project/src directory install the following dependency using the following command:

#### `npm i socket.io-client --save`

## How to run the project

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
Open [http://localhost:8000](http://localhost:8000) to view server running in your browser.

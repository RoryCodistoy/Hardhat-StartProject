# Hardhat-StartProject
## Environment(Ubuntu20.04)
### Nodejs
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
nvm install node
nvm install 14.18.0
nvm ls
nvm use 14..0
### Create a new project
mkdir hardhat-tutorial
cd hardhat-tutorial
npm init --yes
npm install --save-dev hardhat
### Install VSCode
sudo snap install --classic code
### Install Sublime
sudo snap install --classic sublime-text
### Compile
npx hardhat compile
### Deploy
#### ALCHEMY_API_KEY
Go to https://www.alchemyapi.io, sign up, create a new App in its dashboard, and replace "KEY" with its key.
#### ROPSTEN_PRIVATE_KEY
Replace this private key with your Ropsten account private key.
To export your private key from Metamask, open Metamask and go to Account Details > Export Private Key.
Be aware of NEVER putting real Ether into testing accounts.
#### Deploy to testnet
npx hardhat run scripts/deploy.js --network ropsten
#### Test on local
##### Terminal 1
npx hardhat node
##### Terminal 2
npx hardhat run scripts/deploy.js --network localhost

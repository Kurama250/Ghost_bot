<h1 align="center">Bot ghost message server for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

<p align="center">
  <img src="https://img.shields.io/github/stars/Kurama250/Ghost_bot">
  <img src="https://img.shields.io/github/license/Kurama250/Ghost_bot">
  <img src="https://img.shields.io/github/repo-size/Kurama250/Ghost_bot">
  <img src="https://img.shields.io/badge/stability-stable-green">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/module-name">
  <img src="https://img.shields.io/npm/v/fs?label=fs">
  <img src="https://img.shields.io/npm/v/discord.js@13?label=discord.js@13">
</p>


# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Kurama250/Ghost_bot/main/setup_bot.sh)
```

<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Ghost_bot.git
cd Ghost_bot/
npm install discord.js@13 fs
npm install pm2 -g
```

## 2 - on Terminal

```shell script
nano config.json
```

## And you also change this line :

```json
  "token": "YOUR_TOKEN",
```

After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start index.js -n Ghost_bot
```

- Demo : 

![alt text](https://github.com/Kurama250/Ghost_bot/blob/main/ghost.png)

<h3 align="center"><strong>Support on Discord :</strong> <a href="https://discord.gg/6aebQGdDxB">Discord Link</a></3>
<h3 align="center">If you like this repository don't hesitate to give it a star ⭐ !</h3>
<h1 align="center">Then it's the end you have started the bot have fun !</h1>

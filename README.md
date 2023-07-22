<h1 align="center">Bot ghost message server for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- First, download and upload the codes to your server !

- After :

```shell script
chmod +x setup_bot.sh
bash setup_bot.sh
```
<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm node.js zip
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - &&\
apt-get install -y nodejs
```

```shell script
wget https://github.com/Kurama250/Stats_server/archive/refs/heads/main.zip
unzip main.zip
cd Stats_server-main/
npm install discord.js@12 fs
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

<h1 align="center">Then it's the end you have started the bot have fun !</h1>

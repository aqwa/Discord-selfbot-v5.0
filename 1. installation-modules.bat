@echo off
echo.Installation des dependances
set /P userchoice="Souhaitez vous installer les dependances (O/N) ? "
if /i NOT "%userchoice%"=="o" goto:eof
start "" /B npm install -- save discord.js
start "" /B npm install -- save os
start "" /B npm install -- save cpu-stat
start "" /B npm install -- save systeminformation
start "" /B npm install -- save speedtest-net
start "" /B npm install -- save fs
start "" /B npm install -- save chalk
start "" /B npm install -- save physical-cpu-count
start "" /B npm install -- save figlet
start "" /B npm install -- save chalk-animation
start "" /B npm install -- save enmap
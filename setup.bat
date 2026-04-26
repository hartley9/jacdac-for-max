@echo off
echo Installing Jacdac-for-Max dependencies...
cd /d "%~dp0node_content"
npm install
echo Done. You can now open the starter patch in Max.
pause

@echo on
echo starting programming applications!..

start C:\"Program Files"\"Microsoft Office"\root\Office16\OUTLOOK.EXE
start D:\Dev\JetBrains\"IntelliJ IDEA 2017.3"\bin\idea64.exe
start C:\"Program Files (x86)"\Google\Chrome\Application\chrome.exe "https://riskflo.atlassian.net/secure/Dashboard.jspa"
start C:\Users\Melchor\AppData\Local\slack\slack.exe

docker-machine start default
cd D:\Dev\Git_Concur2\riskflo-concur-1.0\local-env
D:
docker-compose up -d mysql

exit

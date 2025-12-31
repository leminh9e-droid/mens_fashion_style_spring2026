@echo off
echo Checking for Git...
git --version
if %errorlevel% neq 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    echo After installing, restart this script.
    pause
    exit /b
)

echo.
echo Initializing Git repository...
git init
git add .
git commit -m "Initial commit - Men's Fashion Website"
git branch -M main

echo.
set /p repo_url="Enter your GitHub Repository URL (e.g., https://github.com/username/repo.git): "

if "%repo_url%"=="" (
    echo No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo Adding remote origin...
git remote add origin %repo_url%

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo Done!
pause

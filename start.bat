@echo off

:: Activate Python virtual environment
call .venv\Scripts\activate

:: Run Python server
start cmd /k python C:\Users\roush\OneDrive\Desktop\smart education\Smart-education-main\api

:: Run React app
npm start

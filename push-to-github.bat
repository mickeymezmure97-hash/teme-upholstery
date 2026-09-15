@echo off
echo ==============================================
echo Pushing TEME UPHOLSTERY to GitHub...
echo ==============================================
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Code pushed to GitHub successfully!
    echo Your site is deploying automatically to GitHub Pages.
) else (
    echo [NOTE] If you haven't created the repository yet, please create it at:
    echo https://github.com/new?name=teme-upholstery
    echo Then run this script again!
)
pause

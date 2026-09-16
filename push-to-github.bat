@echo off
echo ==============================================
echo Pushing TEME UPHOLSTERY to GitHub...
echo ==============================================
git push -u origin main
echo.
echo Building production assets...
call npm.cmd run build
echo.
echo Deploying to GitHub Pages (gh-pages)...
git add dist -f
git commit -m "Deploy latest build to gh-pages"
for /f "delims=" %%i in ('git subtree split --prefix dist HEAD') do set SPLIT_HASH=%%i
git push origin %SPLIT_HASH%:gh-pages --force
git reset HEAD~1
echo.
echo [SUCCESS] Code and live site deployed to GitHub!
pause

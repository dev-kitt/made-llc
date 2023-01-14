@echo off
title Website Selector by STANDARDmade LLC
:top
REM ==========================================================
REM Program
REM ==========================================================
echo --------------------------------------------------------------------------------
echo WELCOME TO THE WEBSITE SELECTOR PROGRAM
echo --------------------------------------------------------------------------------
echo.
echo This is an application that lets you launch some website from CLI
echo.
echo This program was brought to you by . . . 
ping localhost -n 5 >nul
cls
echo.
echo.
echo 		  	MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
echo 		  	M ooooooooo/:----:/+oooooooo`M
echo 		  	M MMMNy+-`           -/smMMM M
echo 		  	M Mm/                    -yM M
echo 		  	M +                        . M
echo 		  	M /.    `.          `.    `/ M
echo 		  	M sN-osoodMh+.  `:yNmsoss.mh M
echo 		  	M sd:`    -sNN. NNy-    `.hy M
echo 		  	M -  + :ymds`    `odmh/ +` . M
echo 		  	M    `-ooosh.`- :.hyooo.`    M
echo 		  	M   -+      :-  .-`     /:   M
echo 		  	M  yMs    -/s:  -oo:`   /Mh  M
echo 		  	M  MMMmhdMMMMMmmMMMMMmhdMMM. M
echo 		  	M yyMMMMMMMMMMMMMMMMMMMMMMsy M
echo 		  	M MN:.-://mNdddhdhmNo/::-.mM M
echo 		  	M MMd     `:shdmdy+`     sMM M
echo 		  	M MMM-                  `NMM M
echo 		  	M MMMN/                -mMMM M
echo 		  	M MMMMMm/`           :hMMMMM M
echo 		  	M NNNNNNNm-..-//....dNNNNNNN M
echo 			MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
echo 			***********fSOCIETY***********
ping localhost -n 5 >nul
cls

echo --------------------------------------------------------------------------------
echo WEBSITE SELECTOR
echo --------------------------------------------------------------------------------
echo.
echo Key: [1] GOOGLE
echo [2] YOUTUBE
echo [3] WIKI
echo [4] GITHUB
echo [5] TACO IPSUM
echo [6] PRETTIER
echo [7] ASCIIMATION
echo [8] STACK OVERFLOW
echo [9] CODE ACADEMY
echo [10] SQL AUTHORITY
echo.
echo [e] Exit
echo.
echo --------------------------------------------------------------------------------
echo Enter the number of the website which you would like to go to:
echo.
set /p udefine= 
echo.
echo --------------------------------------------------------------------------------
if %udefine%==1 start https://www.google.com
if %udefine%==2 start https://www.youtube.com
if %udefine%==3 start https://www.wikipedia.com 
if %udefine%==4 start https://github.com
if %udefine%==5 start https://www.tacoipsum.com
if %udefine%==6 start https://prettier.io/playground
if %udefine%==7 start https://asciimation.co.nz/index.php
if %udefine%==8 start https://stackoverflow.com
if %udefine%==9 start https://www.codecademy.com
if %udefine%==10 start https://blog.sqlauthority.com
if %udefine%==e goto exit

cls
echo --------------------------------------------------------------------------------
echo Thank You for using Site Selector by STANDARDmade, LLC
echo --------------------------------------------------------------------------------
echo.
echo --------------------------------------------------------------------------------
echo Type [e] to exit or [b] to go back and select another site.
echo.
set /p udefine=
echo.
echo --------------------------------------------------------------------------------
if %udefine%==b goto top
if %udefine%==e goto exit
:exit
cls
REM Get Outta Here
echo --------------------------------------------------------------------------------
echo GET OUTTA HERE
echo --------------------------------------------------------------------------------
echo Thank you for using Website Selector by STANDARDmade, LLC 
echo NOS VEMOS LA PROXIMA VEX
ping localhost -n 3 >nul
cls
echo.
echo.
echo.
echo 			EVILCORPEVILCORPEVILCORPEVILCORPEVI
echo 			LCORPEVILCORPEVILhCORPEVILCORPEVILC
echo 			EVILCORPEVILCNd+` .yORPEVILCORPEVIL
echo 			CORPEVILCORms-      /PEVILCORPEVILC
echo 			ORPEVILCOh/`     `:yRPEVILCORPEVILC
echo 			ORPEVIms-      .odMms--yLCORPEVILCO
echo 			RPEVh/`      /hILh/`    /mCORPEVILC
echo 			ORPE:       `odo-      -omVILCORPEV
echo 			ILCORy.       `     ./hPEd+..yVILCO
echo 			RPEVILm+`         -smCms-`    :mORP
echo 			EVILCORPd:        +mh/.     `/yEVIL
echo 			CORPEVILCOy.       .      -omRPEVIL
echo 			CORPEVILCORm+`         `/hPEVILCORP
echo 			EVILCORPEVILCd:      :smORPEVILCORP
echo 			EVILCORPEVILCORy. .+dPEVILCORPEVILC
echo 			ORPEVILCORPEVILCOhRPEVILCORPEVILCOR
echo 			PEVILCORPEVILCORPEVILCORPEVILCORPEV
ping localhost -n 3 >nul
endlocal
exit
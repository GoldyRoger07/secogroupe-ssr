
setlocal enabledelayedexpension

for %%F in (*.jpg,*.jpeg,*.png) do (
  echo suppression de %%F
  del %%F 
)

echo.

echo suppression terminee

pause
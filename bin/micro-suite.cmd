@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\micro-suite\bin\micro-suite" %*
) ELSE (
  node  "%~dp0\node_modules\micro-suite\bin\micro-suite" %*
)

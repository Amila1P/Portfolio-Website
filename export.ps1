# Export Next.js static site to out/ folder
if (Test-Path out) {
    Remove-Item -Recurse -Force out
}

New-Item -ItemType Directory -Force -Path out | Out-Null

# Copy Next.js static assets
Copy-Item -Recurse -Force .next/static out/_next/static

# Copy main HTML file
Copy-Item -Force .next/server/app/index.html out/index.html

# Copy public assets
Get-ChildItem -Path public -Recurse | ForEach-Object {
    $targetPath = $_.FullName.Replace((Get-Location).Path + "\public", (Get-Location).Path + "\out")
    if ($_.PSIsContainer) {
        New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
    } else {
        Copy-Item -Force $_.FullName $targetPath
    }
}

Write-Host "Static site exported to out/ folder" -ForegroundColor Green

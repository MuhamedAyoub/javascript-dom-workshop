# Check if Node.js is already installed
$nodeInstalled = Test-Path -Path "C:\Program Files\nodejs\node.exe"


#! Check if Node.js is already installed
$nodeInstalled = Test-Path -Path "C:\Program Files\nodejs\node.exe"

# ? Check if npm is already installed
$npmInstalled = Test-Path -Path "C:\Program Files\nodejs\npm.cmd"

if ($nodeInstalled -and $npmInstalled) {
    $nodeVersion = node -v
    $npmVersion = npm -v
    Write-Host "Node.js is already installed. Version: $nodeVersion"
    Write-Host "npm is already installed. Version: $npmVersion"
}
else {
    # Download Node.js installer
    $nodeInstallerUrl = "https://nodejs.org/dist/v18.16.0/node-v18.16.0-x86.msi"  
    $installerPath = "$env:TEMP\node.msi"  # Path to temporarily save the installer
    Invoke-WebRequest -Uri $nodeInstallerUrl -OutFile $installerPath

    # Install Node.js
    Start-Process -Wait -FilePath msiexec -ArgumentList "/i $installerPath /qn" 

    # Remove temporary installer
    Remove-Item -Path $installerPath

    # Verify the installation
    $nodeVersion = node -v
    $npmVersion = npm -v

    if ($nodeVersion -and $npmVersion) {
        Write-Host "Node.js and npm installed successfully. Node.js Version: $nodeVersion, npm Version: $npmVersion"
    }
    else {
        Write-Host "Failed to install Node.js and npm."
    }
}

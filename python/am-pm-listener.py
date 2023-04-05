#!/usr/bin/env python

import os
import shutil
import subprocess
import datetime

# Get the current time
now = datetime.datetime.now()

# Path to workspace folder
workspace_folder = 'C:\Projects\standard-made'

# Path to logo-day.png
logo_day_path = os.path.join(workspace_folder, 'logo-day.png')

# Path to logo-night.png
logo_night_path = os.path.join(workspace_folder, 'logo-night.png')

# Check if the time is 5am or 5pm
if now.hour == 5:
    # Change the logo
    print("Changing the logo...")
    # Check if logo-day.png exists
    if os.path.exists(logo_day_path):
        # Replace logo-day.png with logo-night.png
        # Commit and push changes to github
        shutil.copyfile(logo_night_path, logo_day_path)
        subprocess.run(['git', 'add', logo_day_path])
        subprocess.run(['git', 'commit', '-m', 'Replace logo-day.png with logo-night.png'])
        subprocess.run(['git', 'push'])
    # Code to change the logo
    print("Logo changed!")
else:
    print("It's not 5am or 5pm, so no logo change.")




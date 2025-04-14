import random
import os

THEMES_FILE = './themeslist.txt'
THEMES_PATH = os.path.join(os.path.dirname(__file__), THEMES_FILE)

def getTheme():
    try:
        with open(THEMES_PATH) as themesListFile:
            try:
                themes = themesListFile.read().split()
                return random.choice(themes)
            except (IOError, OSError) as err:
                print("Error writing to file", err)
                return None
    except (FileNotFoundError, PermissionError, OSError) as err:
        print("Error opening file", err)
        return None

        
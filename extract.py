import gdown
from pypdf import PdfReader
import os

files = [
    ("1nZcf113Ui51f3YmfrFa3U6cDKmlflXAN", "History_Signs.pdf"),
    ("15XKvbmZjZ6tixCWbuf-WWtJ_gwOxhtV9", "Suggestibility.pdf"),
    ("1MJTuKQBRF3WFz4FqgXUqto40KjzmkVtD", "Rules_Of_Mind.pdf")
]

for fid, name in files:
    url = f"https://drive.google.com/uc?id={fid}"
    gdown.download(url, name, quiet=True)
    
    try:
        reader = PdfReader(name)
        text = ""
        for i in range(min(5, len(reader.pages))):
            text += reader.pages[i].extract_text() + "\n"
        
        print(f"--- CONTENT FOR {name} ---")
        print(text[:1500])
        print("\n\n")
    except Exception as e:
        print(f"Failed to read {name}: {e}")
    finally:
        if os.path.exists(name):
            os.remove(name)

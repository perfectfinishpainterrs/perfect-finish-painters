"""
Perfect Finish Painters - Auto Image Watcher

Run this in the background and it will automatically swap images
as soon as you drop them into the 'drop-images' folder.

Usage: python watch-images.py

Rules:
  - Name files project-1.jpg through project-7.jpg to replace portfolio images
  - Name files logo.png or logo.jpg to replace the logo
  - Any other image name is ignored (use swap-images.py for manual assignment)
  - Processed files are moved to drop-images/processed/
"""

import os
import shutil
import time
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
DROP_DIR = SCRIPT_DIR / "drop-images"
PUBLIC_DIR = SCRIPT_DIR / "public"
DONE_DIR = DROP_DIR / "processed"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}

BEFORE_DIR = PUBLIC_DIR / "before"

VALID_NAMES = {
    "project-1.jpg", "project-2.jpg", "project-3.jpg", "project-4.jpg",
    "project-5.jpg", "project-6.jpg", "project-7.jpg",
    "owner.jpg", "logo.png", "logo.jpg",
}

# before-1.jpg -> public/before/project-1.jpg
BEFORE_NAMES = {
    f"before-{i}.jpg": f"project-{i}.jpg" for i in range(1, 8)
}

POLL_INTERVAL = 2  # seconds


def process_images():
    if not DROP_DIR.exists():
        DROP_DIR.mkdir(parents=True)
        return 0

    count = 0
    for f in DROP_DIR.iterdir():
        if not f.is_file():
            continue
        if f.suffix.lower() not in IMAGE_EXTENSIONS:
            continue
        name_lower = f.name.lower()
        # Check before-image names (before-1.jpg -> public/before/project-1.jpg)
        if name_lower in BEFORE_NAMES:
            BEFORE_DIR.mkdir(parents=True, exist_ok=True)
            target = BEFORE_NAMES[name_lower]
            dest = BEFORE_DIR / target
            shutil.copy2(f, dest)
            print(f"  [SWAPPED] {f.name} -> public/before/{target}")
        elif name_lower in {v.lower() for v in VALID_NAMES}:
            # Find the matching target name (preserving expected casing)
            target = next(v for v in VALID_NAMES if v.lower() == name_lower)
            dest = PUBLIC_DIR / target
            shutil.copy2(f, dest)
            print(f"  [SWAPPED] {f.name} -> public/{target}")

            DONE_DIR.mkdir(exist_ok=True)
            shutil.move(str(f), str(DONE_DIR / f.name))
            count += 1

    return count


def main():
    print("=" * 50)
    print("  PERFECT FINISH PAINTERS - IMAGE WATCHER")
    print("=" * 50)
    print(f"\nWatching: {DROP_DIR}")
    print(f"Drop images named project-1.jpg ... project-7.jpg, before-1.jpg ... before-7.jpg, or logo.png/logo.jpg")
    print(f"They'll auto-swap into the website and move to processed/")
    print(f"\nPress Ctrl+C to stop.\n")

    DROP_DIR.mkdir(parents=True, exist_ok=True)
    DONE_DIR.mkdir(exist_ok=True)

    while True:
        try:
            swapped = process_images()
            if swapped:
                print(f"  -> {swapped} image(s) swapped! Refresh browser to see changes.\n")
            time.sleep(POLL_INTERVAL)
        except KeyboardInterrupt:
            print("\nStopped watching.")
            break


if __name__ == "__main__":
    main()

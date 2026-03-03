"""
Perfect Finish Painters - Image Swapper

Drop images into the 'drop-images' folder, then run this script.
It will let you assign each dropped image to a website slot and swap them in.
"""

import os
import shutil
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
DROP_DIR = SCRIPT_DIR / "drop-images"
PUBLIC_DIR = SCRIPT_DIR / "public"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}

BEFORE_DIR = PUBLIC_DIR / "before"

SLOTS = {
    "1": {"file": "project-1.jpg", "label": "Portfolio #1 - Shed Transformation (Exterior)"},
    "2": {"file": "project-2.jpg", "label": "Portfolio #2 - Room Renovation (Interior + Flooring)"},
    "3": {"file": "project-3.jpg", "label": "Portfolio #3 - Commercial Ceiling"},
    "4": {"file": "project-4.jpg", "label": "Portfolio #4 - Radiator Refinishing (Specialty)"},
    "5": {"file": "project-5.jpg", "label": "Portfolio #5 - Basement Floor Coating"},
    "6": {"file": "project-6.jpg", "label": "Portfolio #6 - Whole House Interior"},
    "7": {"file": "project-7.jpg", "label": "Portfolio #7 - Ceiling Restoration (Drywall)"},
    "O": {"file": "owner.jpg", "label": "Owner Photo (Meet the Owner section)"},
    "L": {"file": "logo.png", "label": "Site Logo (PNG)"},
    "J": {"file": "logo.jpg", "label": "Site Logo (JPG)"},
}

# before-1.jpg -> public/before/project-1.jpg, etc.
BEFORE_SLOTS = {
    f"before-{i}.jpg": f"project-{i}.jpg" for i in range(1, 8)
}


def get_dropped_images():
    if not DROP_DIR.exists():
        DROP_DIR.mkdir(parents=True)
        return []
    return sorted(
        f for f in DROP_DIR.iterdir()
        if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS
    )


def auto_swap():
    """Auto-swap any images that already match slot names (project-1.jpg, etc.)."""
    images = get_dropped_images()
    auto_matched = []
    remaining = []

    slot_files = {s["file"].lower(): s for s in SLOTS.values()}

    for img in images:
        name_lower = img.name.lower()
        # Check before-image slots (before-1.jpg -> public/before/project-1.jpg)
        if name_lower in BEFORE_SLOTS:
            BEFORE_DIR.mkdir(parents=True, exist_ok=True)
            dest = BEFORE_DIR / BEFORE_SLOTS[name_lower]
            shutil.copy2(img, dest)
            print(f"  AUTO: {img.name} -> before/{BEFORE_SLOTS[name_lower]}")
            auto_matched.append(img)
        elif name_lower in slot_files:
            slot = slot_files[name_lower]
            dest = PUBLIC_DIR / slot["file"]
            shutil.copy2(img, dest)
            print(f"  AUTO: {img.name} -> {slot['label']}")
            auto_matched.append(img)
        else:
            remaining.append(img)

    return auto_matched, remaining


def interactive_swap(images):
    """Let user assign remaining images to slots."""
    for img in images:
        print(f"\n--- Image: {img.name} ---")
        print("Which slot should this replace?\n")

        for key, slot in SLOTS.items():
            print(f"  [{key}] {slot['label']}")
        print()
        for i in range(1, 8):
            print(f"  [B{i}] BEFORE photo for Portfolio #{i}")
        print(f"  [S] Skip this image")
        print(f"  [Q] Quit")

        while True:
            choice = input("\nEnter choice: ").strip().upper()

            if choice == "Q":
                print("Done!")
                return
            if choice == "S":
                print(f"  Skipped {img.name}")
                break
            if choice.startswith("B") and choice[1:].isdigit() and 1 <= int(choice[1:]) <= 7:
                num = choice[1:]
                BEFORE_DIR.mkdir(parents=True, exist_ok=True)
                dest = BEFORE_DIR / f"project-{num}.jpg"
                if img.suffix.lower() != ".jpg":
                    try:
                        from PIL import Image as PILImage
                        pil_img = PILImage.open(img)
                        pil_img = pil_img.convert("RGB")
                        pil_img.save(dest, "JPEG", quality=90)
                        print(f"  Converted & saved: {img.name} -> before/project-{num}.jpg")
                    except ImportError:
                        shutil.copy2(img, dest)
                        print(f"  Copied: {img.name} -> before/project-{num}.jpg (no conversion)")
                else:
                    shutil.copy2(img, dest)
                    print(f"  Swapped: {img.name} -> before/project-{num}.jpg")
                break
            if choice in SLOTS:
                slot = SLOTS[choice]
                dest = PUBLIC_DIR / slot["file"]

                # Convert to jpg if needed for project slots
                if choice.isdigit() and img.suffix.lower() != ".jpg":
                    try:
                        from PIL import Image as PILImage
                        pil_img = PILImage.open(img)
                        pil_img = pil_img.convert("RGB")
                        pil_img.save(dest, "JPEG", quality=90)
                        print(f"  Converted & saved: {img.name} -> {slot['file']}")
                    except ImportError:
                        # No PIL, just copy as-is
                        shutil.copy2(img, dest)
                        print(f"  Copied: {img.name} -> {slot['file']} (no conversion)")
                else:
                    shutil.copy2(img, dest)
                    print(f"  Swapped: {img.name} -> {slot['file']}")
                break
            else:
                print("  Invalid choice, try again.")


def main():
    print("=" * 50)
    print("  PERFECT FINISH PAINTERS - IMAGE SWAPPER")
    print("=" * 50)

    images = get_dropped_images()

    if not images:
        print(f"\nNo images found in: {DROP_DIR}")
        print("Drop your images there and run this again!")
        return

    print(f"\nFound {len(images)} image(s) in drop-images/:\n")
    for img in images:
        print(f"  - {img.name}")

    print("\n--- Auto-matching named files ---")
    auto_matched, remaining = auto_swap()

    if auto_matched:
        print(f"\n  {len(auto_matched)} image(s) auto-swapped!")

    if remaining:
        print(f"\n{len(remaining)} image(s) need manual assignment:")
        interactive_swap(remaining)
    elif not auto_matched:
        print("\nNo matches found. Rename your images to project-1.jpg, etc.")
        print("Or drop any image and run again to assign interactively.")

    # Ask to clean up
    all_dropped = get_dropped_images()
    if all_dropped:
        clean = input("\nMove processed images out of drop folder? (y/n): ").strip().lower()
        if clean == "y":
            done_dir = DROP_DIR / "processed"
            done_dir.mkdir(exist_ok=True)
            for img in all_dropped:
                shutil.move(str(img), str(done_dir / img.name))
            print(f"  Moved to drop-images/processed/")

    print("\nDone! Refresh your browser to see the changes.")


if __name__ == "__main__":
    main()

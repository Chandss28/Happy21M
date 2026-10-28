import os
from PIL import Image

def main():
    poster_path = 'assets/birthday-poster.png'
    if not os.path.exists(poster_path):
        print(f"Error: {poster_path} not found")
        return

    img = Image.open(poster_path)
    w, h = img.size
    print(f"Loaded {poster_path} ({w}x{h})")

    # Define bounding boxes tailored to each memory photo and scrapbook element
    crops = {
        'memory-1-hamster-couple': (0, 0, 255, 250),
        'memory-2-photostrip-top': (250, 15, 375, 255),
        'memory-3-bottles-peace': (365, 90, 570, 335),
        'memory-4-cream-hijab-smile': (310, 340, 510, 565),
        'memory-5-bunny-hood-couple': (15, 505, 230, 735),
        'memory-6-photostrip-bottom': (5, 715, 145, 965),
        'memory-7-cowboy-mirror': (160, 695, 395, 940),
        'memory-8-sage-hijab-sweet': (395, 615, 560, 845),
        'memory-9-blue-crewneck-mirror': (370, 825, 570, 1015),
        'sticker-title': (5, 240, 350, 510),
        'sticker-cake': (450, 475, 575, 605)
    }

    for name, box in crops.items():
        cropped = img.crop(box)
        output_path = f"assets/{name}.png"
        cropped.save(output_path, "PNG", optimize=True)
        print(f"Created {output_path} ({cropped.size[0]}x{cropped.size[1]})")

if __name__ == '__main__':
    main()

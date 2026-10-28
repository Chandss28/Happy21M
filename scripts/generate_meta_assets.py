from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image():
    # 1200 x 630 standard OG Image
    w, h = 1200, 630
    # Background: warm vintage paper color (#FAF6F0)
    img = Image.new('RGB', (w, h), color=(250, 246, 240))
    draw = ImageDraw.Draw(img)

    # Draw subtle vintage paper border
    draw.rectangle([20, 20, w - 20, h - 20], outline=(217, 203, 185), width=2)
    draw.rectangle([28, 28, w - 28, h - 28], outline=(232, 222, 208), width=1)

    # Denim blue header banner
    draw.rounded_rectangle([60, 50, 580, 110], radius=12, fill=(74, 124, 157))

    # Load poster to paste on the right side
    poster_path = 'assets/birthday-poster.png'
    if os.path.exists(poster_path):
        poster = Image.open(poster_path)
        # Resize poster to fit height ~ 540
        pw = int(poster.width * (540 / poster.height))
        ph = 540
        poster_resized = poster.resize((pw, ph), Image.Resampling.LANCZOS)
        
        # White polaroid border around poster
        polaroid_w = pw + 24
        polaroid_h = ph + 34
        polaroid_x = w - polaroid_w - 60
        polaroid_y = 45
        
        # Shadow
        draw.rectangle([polaroid_x + 6, polaroid_y + 8, polaroid_x + polaroid_w + 6, polaroid_y + polaroid_h + 8], fill=(210, 200, 190))
        # White frame
        draw.rectangle([polaroid_x, polaroid_y, polaroid_x + polaroid_w, polaroid_y + polaroid_h], fill=(255, 255, 255), outline=(220, 215, 205), width=1)
        # Paste poster
        img.paste(poster_resized, (polaroid_x + 12, polaroid_y + 12))

    # Add cute washi tape on poster
    draw.rectangle([w - 200, 32, w - 120, 55], fill=(232, 168, 179)) # dusty pink tape

    # Save OG image
    img.save('assets/og-image.png', 'PNG', optimize=True)
    print("Created assets/og-image.png (1200x630)")

def create_favicon():
    # 64x64 favicon
    img = Image.new('RGBA', (64, 64), color=(0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Soft denim blue circle
    draw.ellipse([4, 4, 60, 60], fill=(74, 124, 157))
    # Soft inner border
    draw.ellipse([8, 8, 56, 56], outline=(255, 255, 255), width=2)
    # Heart or "21" in cream/pink
    draw.rounded_rectangle([20, 24, 44, 40], radius=4, fill=(245, 239, 230))
    
    img.save('assets/favicon.png', 'PNG')
    print("Created assets/favicon.png")

if __name__ == '__main__':
    create_og_image()
    create_favicon()

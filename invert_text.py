from PIL import Image

# Open the image
img = Image.open('public/Logos-2.webp')
img = img.convert('RGBA')

# Get image data
data = img.getdata()
new_data = []

for item in data:
    r, g, b, a = item
    if a > 0:
        # Check if the pixel is dark gray/black
        # WorkPods text is very dark. 
        if r < 40 and g < 40 and b < 40:
            # Change black to white, keep the alpha
            new_data.append((255, 255, 255, a))
        else:
            new_data.append(item)
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('public/Logos-2.webp', 'WEBP')
print("Successfully inverted black text to white!")

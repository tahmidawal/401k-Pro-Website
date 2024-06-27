import base64
from PIL import Image
import svgwrite
import io


def jpg_to_base64(jpg_filename):
    # Open the JPG image and convert it to base64
    with open(jpg_filename, "rb") as image_file:
        base64_image = base64.b64encode(image_file.read()).decode('utf-8')
    return base64_image


def create_svg(filename, base64_image):
    # Create an SVG drawing object with specified dimensions
    dwg = svgwrite.Drawing(filename, size=(600, 600))

    # Embed the base64 image into the SVG
    image_data = f"data:image/jpeg;base64,{base64_image}"
    dwg.add(dwg.image(href=image_data, insert=(0, 0), size=("600px", "600px")))

    # Add a rectangle with smooth edges
    dwg.add(dwg.rect(insert=(50, 50), size=(500, 500),
            fill='none', stroke='lightblue', stroke_width=5))

    # Add a circle with smooth edges
    dwg.add(dwg.circle(center=(300, 300), r=100,
            fill='none', stroke='green', stroke_width=5))

    # Add some text with clear rendering
    dwg.add(dwg.text('Hello, SVG!', insert=(150, 320),
            font_size='30px', fill='black', style="font-family:Arial"))

    # Save the SVG file
    dwg.save()


# Specify the filenames
jpg_filename = 'Picture1.jpg'
svg_filename = 'testimg1.svg'

# Convert the JPG image to base64
base64_image = jpg_to_base64(jpg_filename)

# Create the SVG file with the embedded JPG image
create_svg(svg_filename, base64_image)

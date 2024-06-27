# Recolor any pixels in a PNG image that are darker than a certain threshold to 1C1B1B (a dark grey)

from PIL import Image, ImageEnhance
import sys
from PIL import Image


def recolor_image(image_path, threshold):
    image = Image.open(image_path)
    pixels = image.load()
    for x in range(image.width):
        for y in range(image.height):
            r, g, b, a = pixels[x, y]
            if r < threshold and g < threshold and b < threshold:
                pixels[x, y] = (28, 27, 27, a)
    image.save(image_path + "_recolor.png")


# Recolor all pixels darker than dark gray
recolor_image(
    "/Users/camabernethy/Documents/401(k) Pro Website/401k_pro_fixed_background.png", 60)


# change dark gray and black color to white and change white to dark gray
def recolor_image(image_path, threshold):
    image = Image.open(image_path)
    pixels = image.load()
    for x in range(image.width):
        for y in range(image.height):
            r, g, b, a = pixels[x, y]
            if r < threshold and g < threshold and b < threshold:
                pixels[x, y] = (255, 255, 255, a)
            elif r > 200 and g > 200 and b > 200:
                pixels[x, y] = (28, 27, 27, a)
    image.save(image_path + "_recolor_white_gray.png")


recolor_image(
    "/Users/camabernethy/Documents/401(k) Pro Website/401k_pro_fixed_background.png", 60)


def swap_colors(image_path, output_path):
    # Open the image
    image = Image.open(image_path)
    # Convert the image to RGB mode
    image = image.convert('RGB')

    # Get the pixel data
    pixels = image.load()

    # Define the colors
    dark_gray = (28, 27, 27)
    black = (0, 0, 0)
    white = (255, 255, 255)

    # Loop through the pixels and swap colors
    for y in range(image.height):
        for x in range(image.width):
            r, g, b = pixels[x, y]

            if (r, g, b) == white:
                pixels[x, y] = dark_gray
            elif (r, g, b) in [black, dark_gray]:
                pixels[x, y] = white

    # Save the modified image
    image.save(output_path)

# Usage example


def swap_colors_based_on_threshold(image_path, output_path, dark_threshold=(61, 61, 61), white_threshold=(162, 230, 235), dark_gray=(28, 27, 27)):
    # Open the image
    image = Image.open(image_path)
    # Convert the image to RGB mode
    image = image.convert('RGB')

    # Get the pixel data
    pixels = image.load()

    # Loop through the pixels and swap colors based on thresholds
    for y in range(image.height):
        for x in range(image.width):
            r, g, b = pixels[x, y]

            # Check if the color is dark (darker than the dark blue threshold)
            if (r, g, b) <= dark_threshold:
                pixels[x, y] = (255, 255, 255)
            # Check if the color is white or near white (greater than the white threshold)
            elif (r, g, b) >= white_threshold:
                pixels[x, y] = dark_gray

    # Save the modified image
    image.save(output_path)


# Usage example
swap_colors_based_on_threshold(
    '401k_pro_fixed_background.png', '401k_pro_fixed_background_recolor_white_gray_swap.png')


def sharpen_image(file_path):
    # Load the image
    image_path = file_path
    image = Image.open(image_path)

    # Sharpen the image
    enhancer = ImageEnhance.Sharpness(image)
    sharpened_image = enhancer.enhance(2.0)

    # Convert to RGB
    sharpened_image = sharpened_image.convert('RGB')
    pixels = sharpened_image.load()

    # Define colors
    new_blue = (0x5f, 0xaa, 0xee)  # The new blue color
    black = (0, 0, 0)
    white = (255, 255, 255)

    # Change the graphic on the left to blue
    for y in range(sharpened_image.height):
        for x in range(sharpened_image.width):
            r, g, b, *rest = pixels[x, y]
            if (r, g, b) == black:
                pixels[x, y] = new_blue
            elif (r, g, b) == white:
                pixels[x, y] = black

    # Save the modified image
    output_path = file_path.replace('.png', '_sharpened.png')
    sharpened_image.save(output_path)

    output_path


sharpen_image('401k_pro_fixed_background_recolor_white_gray_swap.png')


# Change all black or dark bacground to whtie
def change_dark_to_white(image_path, output_path):
    # Open the image
    image = Image.open(image_path)
    # Convert the image to RGB mode
    image = image.convert('RGB')

    # Get the pixel data
    pixels = image.load()

    # Define the colors
    dark = (79, 108, 117)
    white = (255, 255, 255)

    # Loop through the pixels and swap colors
    for y in range(image.height):
        for x in range(image.width):
            r, g, b = pixels[x, y]

            if (r, g, b) <= dark:
                pixels[x, y] = white

    # Save the modified image
    image.save(output_path)


change_dark_to_white('/Users/camabernethy/Documents/401(k) Pro Website/Screenshot 2024-06-25 at 9.58.00 AM.png',
                     '/Users/camabernethy/Documents/401(k) Pro Website/401k_pro_fixed_background_recolor_white_gray_swap_sharpened_white.png')


# Change all gray in the image to white
def change_gray_to_white(image_path, output_path):
    # Open the image
    image = Image.open(image_path)
    # Convert the image to RGB mode
    image = image.convert('RGB')

    # Get the pixel data
    pixels = image.load()

    # Define the colors
    gray = (28, 27, 27)
    white = (255, 255, 255)

    # Loop through the pixels and swap colors
    for y in range(image.height):
        for x in range(image.width):
            r, g, b = pixels[x, y]

            if (r, g, b) == gray:
                pixels[x, y] = white

    # Save the modified image
    image.save(output_path)


change_gray_to_white("/Users/camabernethy/Documents/401(k) Pro Website/401k_pro_fixed_background_recolor_white_gray_swap_sharpened_white.png",
                     "/Users/camabernethy/Documents/401(k) Pro Website/401k_pro_fixed_background_recolor_white_gray_swap_sharpened_white_gray_white.png")

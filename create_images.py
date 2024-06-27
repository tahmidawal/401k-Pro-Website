import cv2
import numpy as np


def convert_light_colors_to_white(image_path, output_path, threshold=200):
    # Read the image
    image = cv2.imread(image_path)

    # Convert the image to HSV color space for better color thresholding
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Define the threshold for light colors
    # In HSV, V (Value) channel represents brightness
    light_threshold = threshold

    # Create a mask where the brightness is above the threshold
    light_mask = hsv_image[:, :, 2] > light_threshold

    # Set the pixels in the mask to white
    image[light_mask] = [255, 255, 255]

    # Save the modified image
    cv2.imwrite(output_path, image)


# Example usage
convert_light_colors_to_white('input_image.png', 'output_image.png')

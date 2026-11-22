import re

with open("src/data/products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace images according to category
def replace_img(match):
    full_block = match.group(0)
    cat_m = re.search(r"category:\s*['\"]([^'\"]+)['\"]", full_block)
    cat = cat_m.group(1) if cat_m else "insecticides"
    
    img_map = {
        "insecticides": "/images/insecticides.jpg",
        "fungicides": "/images/fungicides.jpg",
        "herbicides": "/images/herbicides.jpg",
        "pgr": "/images/pgr.jpg",
        "fertilizers": "/images/fertilizers.jpg",
        "organic": "/images/organic.jpg"
    }
    target_img = img_map.get(cat, "/images/insecticides.jpg")
    
    return re.sub(r"image:\s*['\"]https://images\.unsplash\.com/[^'\"]+['\"]", f"image: '{target_img}'", full_block)

# Split by product objects
blocks = content.split("{\n    id:")
new_blocks = [blocks[0]]
for b in blocks[1:]:
    b = "{\n    id:" + b
    # find image
    cat_m = re.search(r"category:\s*['\"]([^'\"]+)['\"]", b)
    cat = cat_m.group(1) if cat_m else "insecticides"
    img_map = {
        "insecticides": "/images/insecticides.jpg",
        "fungicides": "/images/fungicides.jpg",
        "herbicides": "/images/herbicides.jpg",
        "pgr": "/images/pgr.jpg",
        "fertilizers": "/images/fertilizers.jpg",
        "organic": "/images/organic.jpg"
    }
    target_img = img_map.get(cat, "/images/insecticides.jpg")
    b = re.sub(r"image:\s*['\"]https://images\.unsplash\.com/[^'\"]+['\"]", f"image: '{target_img}'", b)
    new_blocks.append(b[7:]) # remove the prepended "{\n    id:"

final_content = "{\n    id:".join(new_blocks)

with open("src/data/products.js", "w", encoding="utf-8") as f:
    f.write(final_content)

print("Updated src/data/products.js with local images.")

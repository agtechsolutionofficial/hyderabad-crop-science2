with open("src/data/products.js", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace("id:d:", "id:")
with open("src/data/products.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Fixed id:d: typos.")

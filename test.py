import ollama

stream = ollama.chat("mistral", messages=[{"role": "user", "content": "Tell me a story"}], stream=True)

for chunk in stream:
    print(chunk['message']['content'], end="", flush=True)

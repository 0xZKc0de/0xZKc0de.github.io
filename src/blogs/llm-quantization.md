# Comprehensive Guide to LLM Quantization: From FP16 to GGUF/ONNX 4-bit

Large Language Models (LLMs) like LLaMA and Phi-3 require massive amounts of memory when deployed in standard 16-bit float (FP16) or 32-bit float formats. Quantization is the process of compressing these models by reducing the precision of the network weights.

## What is 4-bit Quantization?

Instead of storing a weight as a 16-bit number, we map it to a 4-bit representation. This shrinks the model size by approximately **4x** and dramatically speeds up inference on both CPUs and edge devices.

### Formats: GGUF vs ONNX

* **GGUF**: Created by the `llama.cpp` team. Ideal for local inference, especially on Apple Silicon and CPUs.
* **ONNX**: Developed by Microsoft. Excellent for deploying standard machine learning models to mobile applications and edge devices using hardware accelerators.

```bash
# Example: converting a HuggingFace model to GGUF using llama.cpp
python convert-hf-to-gguf.py models/llama3-8B --outtype q4_0
```

> "Quantization democratizes AI by allowing massive models to run on consumer hardware."

I will continue updating this guide with more detailed code examples and benchmarks comparing latency drops across different hardware profiles.

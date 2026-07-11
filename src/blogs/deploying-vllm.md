# Deploying vLLM on AWS SageMaker: Best Practices for High-Throughput Serving

vLLM is an incredibly fast library for LLM inference and serving. By leveraging PagedAttention, it can achieve 10x-20x higher throughput than standard HuggingFace Transformers. Deploying this onto AWS SageMaker requires careful configuration to maximize GPU utilization.

## Step 1: Dockerizing vLLM

We start by defining a custom Dockerfile that installs vLLM and sets up the entrypoint for SageMaker.

```dockerfile
FROM nvcr.io/nvidia/pytorch:23.10-py3
RUN pip install vllm
ENTRYPOINT ["python3", "-m", "vllm.entrypoints.api_server"]
```

## Step 2: Optimizing Throughput

1. **Tensor Parallelism**: If you are deploying on a `ml.p4d.24xlarge` (8x A100), ensure you set `-tensor-parallel-size 8` to shard the model across all GPUs.
2. **Max Model Length**: Truncate context size via `--max-model-len 4096` if you don't need massive contexts, to save on KV cache memory.

### Next Steps

In the next section, we'll dive into load testing this architecture using `locust` and `CloudWatch` metrics.

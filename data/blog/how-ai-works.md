---
title: How AI Works
date: '2026-09-14'
authors: [ 'default' ]
tags: [ 'machine learning', 'ai', 'programming' ]
draft: false
summary: AI is not magic and it is not a database of answers. It is a very large function that learned to predict. Here is what is actually happening underneath, from a single neuron to a language model.
layout: PostLayout
---

## It's prediction, all the way down 🔮

Most explanations of AI either stop at "it's like a brain" or jump straight to matrix calculus. Neither is much use if you write software for a living.

So here is the honest one-sentence version: **an AI model is a very large mathematical function that was tuned, by trial and error, to predict things.**

That's it. Everything else — neurons, training, attention, chatbots — is detail on top of that single idea. Let's build it up.

### A neuron is smaller than you think

The basic unit isn't mysterious. A neuron takes some numbers, multiplies each by a weight, adds them up, adds a bias, and squashes the result:

$$
y = f(w_1x_1 + w_2x_2 + \cdots + w_nx_n + b)
$$

In code that's genuinely all it is:

```js
function neuron (inputs, weights, bias) {
  const sum = inputs.reduce((acc, x, i) => acc + x * weights[i], bias)
  return Math.max(0, sum) // ReLU: the "squash" step
}
```

One neuron is useless. But stack thousands into layers, feed the output of one layer into the next, and the whole thing can approximate startlingly complicated relationships. A modern model is this, repeated until you run out of GPUs.

The `weights` are the important part. They start as random numbers. **Training is the process of finding good values for them.**

### Training is just "guess, measure, adjust"

Here's the loop, and it's the same loop whether you're classifying cats or training a language model:

1. **Forward pass** — feed in an example, let the network produce an output.
2. **Loss** — compare that output to the correct answer. The gap is a single number called the loss.
3. **Backward pass** — work out, for every single weight, whether nudging it up or down would have made the loss smaller. This is backpropagation, and it's the chain rule from calculus applied at scale.
4. **Update** — nudge every weight a tiny step in the direction that reduces loss. That step size is the learning rate.

Then repeat. Billions of times.

```js
for (const batch of dataset) {
  const prediction = model.forward(batch.input)
  const loss = computeLoss(prediction, batch.target)
  const gradients = loss.backward()
  optimizer.step(gradients) // nudge every weight a little
}
```

Nobody writes the rules. Nobody tells the model what a cat looks like or what good grammar is. The model is handed millions of examples and a scoring function, and the weights drift toward whatever configuration scores well. That's the whole trick, and it's why the field is called *machine learning* rather than *machine programming*.

### Language models predict the next token

Large language models are the same machinery pointed at text, with one specific job: **given some text, predict what comes next.**

Text gets chopped into *tokens* first — roughly word fragments. `"unbelievable"` might become `["un", "bel", "iev", "able"]`. Each token becomes a vector of numbers called an *embedding*, and here something useful falls out: tokens used in similar contexts end up with similar vectors. The model isn't told that "king" and "queen" are related. That relationship emerges because they show up in similar company.

Then the model outputs a probability for every token in its vocabulary:

```text
"The cat sat on the ___"

mat     12.4%
floor    8.1%
couch    6.7%
table    5.2%
...
```

It samples one, appends it, and runs the whole thing again with the longer text as input. One token at a time. When you watch a chatbot type out an answer word by word, that isn't a typing animation — that's genuinely the pace at which it's deciding.

### Attention is what made this work

The piece that unlocked modern language models is *attention*, introduced by the transformer architecture.

Earlier models read text strictly left to right and struggled to connect distant words. Attention lets every token look at every other token and decide which ones matter for interpreting it. In:

> The trophy didn't fit in the suitcase because **it** was too big.

attention is the mechanism that lets the model weight "trophy" heavily when processing "it". It learns these associations from data rather than from grammar rules — and because every token can attend to every other token in parallel, it trains efficiently on a lot of hardware at once. That parallelism is as much the reason transformers won as the accuracy is.

### Why it confidently makes things up

This follows directly from everything above, and it's worth internalising if you're building on top of these models.

The model has **no lookup table**. It didn't memorise its training data as retrievable facts. It adjusted weights until plausible text became likely. When you ask a question, it isn't consulting a source — it's generating the most probable continuation.

A true statement and a plausible-sounding false one can look almost identical to that process. So the model produces fluent, well-structured, completely wrong answers with exactly the same confidence as correct ones, because *fluency* is what it was optimised for. It was never optimised for *truth*.

This is also why retrieval-augmented generation works well: if you paste the actual documentation into the prompt, the model no longer has to reconstruct facts from its weights. It just has to read.

### What this means in practice 🛠️

A few things fall out of the mechanics that are worth keeping in mind:

- **Recency has a hard edge.** The weights were frozen when training ended. Anything after that is genuinely unknown, not merely forgotten.
- **Verify anything load-bearing.** Confidence in the output tells you nothing about correctness, because they come from the same process.
- **Context beats memory.** Giving the model the relevant material directly is more reliable than hoping it absorbed it during training.
- **The same output twice isn't guaranteed.** Sampling is probabilistic. That's a feature for writing and a problem for anything you need to be deterministic.

None of this is a reason to avoid these tools — they're genuinely useful. It's a reason to know what you're holding. A model is a function that learned to predict, and it's very good at it. It just isn't the same thing as knowing.

### The short version

- A neuron is a weighted sum plus a squash. Networks are layers of them.
- Training means adjusting weights to reduce a loss, repeated an enormous number of times.
- Language models predict one token at a time, using attention to decide which parts of the input matter.
- They generate plausible text, not verified facts — which explains both the magic and the mistakes.

Not magic. Just a lot of multiplication, pointed in a useful direction. ⚙️

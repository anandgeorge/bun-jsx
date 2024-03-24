# bun-jsx

A simple example that uses Bun and JSX with Bun's native HTTP server

```
mkdir simple-bun-jsx; cd $_ 
bun init -y
bun add react react-dom
bun add @types/react-dom -d
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.jsx
```

The server will run on [`http://localhost:3000`](http://localhost:3000).

This project was created using `bun init` in bun v1.0.35. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

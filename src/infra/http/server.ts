import { app } from './app';

app.listen(process.env.PORT, () =>
  process.stdout.write(`Listening on port ${process.env.PORT}\n`)
);

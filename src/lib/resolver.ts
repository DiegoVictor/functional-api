import { dependencies } from '@config/dependencies';

const registry = new Map();

export const clear = () => registry.clear();

export const resolve = <T>(name: string): T => {
  if (registry.has(name)) {
    return registry.get(name);
  }

  if (!dependencies[name] || typeof dependencies[name] !== 'function') {
    throw new Error(`No factory found for ${name}`);
  }
  registry.set(name, dependencies[name]());

  return registry.get(name);
};

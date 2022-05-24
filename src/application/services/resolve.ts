import { factories } from '../../infra/factories';

const registry = new Map();

export const clear = () => registry.clear();

export const resolve = <T>(name: string): T => {
  if (registry.has(name)) {
    return registry.get(name);
  }

  if (!factories[name] || typeof factories[name] !== 'function') {
    throw new Error(`No factory found for ${name}`);
  }
  registry.set(name, factories[name]());

  return registry.get(name);
};

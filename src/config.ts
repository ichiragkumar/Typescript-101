interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

console.log(config.endpoint);
console.log(config.apiKey);

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

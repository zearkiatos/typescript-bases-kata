interface Client {
  name: string;
  age?: number;
  address: Address;
  getFullAddress(): string;
}

interface Address {
  id: number;
  zip: string;
  city: string;
}

export { Client };
